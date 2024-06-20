const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Configure AWS SDK with your access keys
AWS.config.update({
  accessKeyId: 'AKIA4NAXYQFUGFB3ZFLE',
  secretAccessKey: 'XeDHKRIKuT1JL/iyJouTvt0CN8JHbtlZo+VAj3+2',
  region: 'us-east-1', 
});

// Create an S3 instance
const s3 = new AWS.S3();

// Function to upload a file to S3
function uploadToS3(file, destinationFolder) {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(file.path);
    const fileName = Date.now() + path.extname(file.originalname);
    const params = {
      Bucket: 'boris-images-01', 
      Key: `${destinationFolder}/${fileName}`,
      Body: fileStream,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.Location); 
      }
    });
  });
}

module.exports = {
  uploadToS3,
};
