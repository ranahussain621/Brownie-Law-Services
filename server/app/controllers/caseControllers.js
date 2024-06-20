'use strict'

const catchAsyncFunction = require('../middlewares/catchAsyncFun')
const Case = require('../model/case')
const s3 = require('../utils/s3Service')
const fs = require("fs");
const JSZip = require("jszip");
const axios = require('axios');
const path = require('path');
// case add
exports.addCase = async (req, res) => {
  const { user_id, service_id, title, description } = req.body;

  let filesPaths = [];

  if (req.files && Array.isArray(req.files) && req.files.length > 0) {
    for (let file of req.files) {
      try {
        // Handle the file upload logic (e.g., storing in S3 or local storage)
        // Update the logic accordingly based on your requirements
        const fileUrl = await s3.uploadToS3(file, 'files');
        filesPaths.push(fileUrl);
      } catch (error) {
        console.error('Error uploading file:', error);
        return res.status(500).json({
          success: false,
          message: 'Error uploading file',
        });
      }
    }
  }

  // Assuming you want to assign only the first file in the array to req.body.file
  req.body.file = filesPaths.length > 0 ? filesPaths[0] : undefined;

  const newData = await Case.create({
    user_id: user_id,
    service_id: service_id,
    title: title,
    description: description,
    file: req.body.file,
  });

  res.json({
    success: true,
    message: 'Case added successfully',
    data: newData,
  });
};

// case update
exports.updateCase = catchAsyncFunction(async (req, res) => {
  const { service_id, title, description } = req.body;

  let filesPaths = [];

  if (req.files && Array.isArray(req.files) && req.files.length > 0) {
    for (let file of req.files) {
      try {
        // Handle the file upload logic (e.g., storing in S3 or local storage)
        // Update the logic accordingly based on your requirements
        const fileUrl = await s3.uploadToS3(file, 'files');
        filesPaths.push(fileUrl);
      } catch (error) {
        console.error('Error uploading file:', error);
        return res.status(500).json({
          success: false,
          message: 'Error uploading file',
        });
      }
    }
  }

  req.body.file = filesPaths.length > 0 ? filesPaths[0] : undefined;

  const updatedCase = await Case.findByIdAndUpdate(
    req.body.id,
    {
      service_id: service_id,
      title: title,
      description: description,
      file: req.body.file,
    },
    { new: true }
  );

  if (!updatedCase) {
    return res.status(404).json({
      success: false,
      message: 'Case not found',
    });
  }

  res.json({
    success: true,
    message: 'Case updated successfully',
    data: updatedCase,
  });
});

// list of cases
exports.caseList = async (req, res) => {
  try {
    const caseData = await Case.find().populate('service_id')

    res.json({
      success: true,
      'data': caseData
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// delete specific case
exports.deleteCase = async (req, res) => {
  try {
    await Case.findOneAndDelete({ _id: req.params.id })

    res.json({
      success: true,
      message: 'case deleted successfully'
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

exports.typeOfCases = async (req, res) => {
  let cases = await Case.find().populate('case_type');
  console.log(cases);
  const caseCount = {};
  const totalCases = cases.length;

  // Count occurrences of each case type
  for (const caseItem of cases) {
    const caseType = caseItem.case_type.case_type;
    if (caseCount[caseType]) {
      caseCount[caseType]++;
    } else {
      caseCount[caseType] = 1;
    }
  }

  // Calculate and store average percentage for each case type
  const casePercentages = {};
  for (const caseType in caseCount) {
    const percentage = (caseCount[caseType] / totalCases) * 100;
    casePercentages[caseType] = percentage.toFixed(2);
  }

  res.json({
    success: true,
    casePercentages
  });
}
exports.listByUser = async (req, res) => {
  try {
    const caseData = await Case.find({user_id:req.body.user_id}).populate('service_id')

    res.json({
      success: true,
      'data': caseData
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}


exports.downloadFile = catchAsyncFunction(async (req, res) => {
  const caseId = req.params.id; // Array of case IDs

  try {
    const cases = await Case.find({ _id: { $in: caseId } });

    if (cases.length === 0) {
      return res.status(404).json({ success: false, error: "Cases not found" });
    }

    const fileUrls = cases.map((caseItem) => caseItem.file);

    const downloadPromises = fileUrls.map(async (url) => {
      try {
        console.log('Downloading file:', url);

        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const fileName = url.substring(url.lastIndexOf('/') + 1);
        const targetFolder = path.join(__dirname, '../../', 'files');
        const filePath = path.join(targetFolder, fileName);

        // Check if the target folder exists, create it if not
        if (!fs.existsSync(targetFolder)) {
          fs.mkdirSync(targetFolder, { recursive: true });
        }

        fs.writeFileSync(filePath, response.data);

        return filePath;
      } catch (error) {
        console.error(`Error downloading file from ${url}:`, error);
        throw new Error(`Failed to download file from ${url}: ${error.message}`);
      }
    });

    // Wait for all download promises to resolve
    const downloadedFiles = await Promise.all(downloadPromises);

    // Create a zip file using jszip
    const zip = new JSZip();

    downloadedFiles.forEach((file) => {
      const fileName = path.basename(file);
      const fileContent = fs.readFileSync(file);
      zip.file(fileName, fileContent);
    });

    const timestamp = Date.now();
    const zipFileName = `Case_${timestamp}.zip`; // Use the current timestamp in the file name

    const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });

    // Set the appropriate headers
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="${zipFileName}"`);

    // Send the zip file as a response using a writable stream
    const stream = zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true });

    stream.pipe(res)
      .on('finish', () => {
        // Clean up: Delete the entire "files" folder
        deleteFolderRecursive(path.join(__dirname, '../../', 'files'));
        console.log('Files downloaded and cleaned up successfully');
      })
      .on('error', (err) => {
        console.error('Error sending zip file response:', err);
        res.status(500).json({ success: false, error: `Failed to send zip file response: ${err.message}` });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error });
  }
});

// Helper function to recursively delete a folder
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);

      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursive call
        deleteFolderRecursive(curPath);
      } else {
        // Delete file
        fs.unlinkSync(curPath);
      }
    });

    // Delete the folder itself
    fs.rmdirSync(folderPath);
  }
}
