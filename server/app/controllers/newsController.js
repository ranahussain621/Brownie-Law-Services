'use strict'

const catchAsyncFunction = require('../middlewares/catchAsyncFun')
const News = require('../model/news')
const s3 = require('../utils/s3Service')

// add news
exports.addNews = async (req, res) => {
  try {
    const { category, id, name, description } = req.body;

    if (req.files && req.files.image) {
      let imagesPaths = [];

      if (Array.isArray(req.files.image) && req.files.image.length > 0) {
        for (let image of req.files.image) {
          try {
            const s3Url = await s3.uploadToS3(image, 'images'); // Upload the updated image to S3
            imagesPaths.push(s3Url);
          } catch (error) {
            console.error('Error uploading image to S3:', error);
            return res.status(500).json({
              success: false,
              message: 'Error uploading image to S3',
            });
          }
        }
      }

      req.body.image = imagesPaths[0];
    }

    const Data = await News.create({
      category: category,
      id: id,
      name: name,
      description: description,
      image: req.body.image
    });

    res.json({
      success: true,
      message: " News added successfully",
      'data': Data
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// update news
exports.updateNews = async (req, res) => {
  try {

    const id = req.body.id;
    if (!id) {
      res.status(400).json({
        success: false,
        message: "'id' is are missing."
      });
      return;
    }
    if (req.files && req.files.image) {
      let imagesPaths = [];

      if (Array.isArray(req.files.image) && req.files.image.length > 0) {
        for (let image of req.files.image) {
          try {
            const s3Url = await s3.uploadToS3(image, 'images'); // Upload the updated image to S3
            imagesPaths.push(s3Url);
          } catch (error) {
            console.error('Error uploading image to S3:', error);
            return res.status(500).json({
              success: false,
              message: 'Error uploading image to S3',
            });
          }
        }
      }

      req.body.image = imagesPaths[0];
    }
    const updateQuery = { _id: id }
    await News.findOneAndUpdate(updateQuery, req.body, { useFindAndModify: false }).then(data => {
      if (!data) {
        res.status(404).send({
          message: `User not found.`
        });
      } else {
        res.json({
          'success': true,
          message: 'User details updated successfully!',
        });
      }
    }).catch(err => {
      res.status(500).send({
        message: err.message
      });
    });

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};



// list of news
// exports.newsList = async (req, res) => {
//   try {
//     const { id, category } = req.body;

//     if (!(id || category)) {
//       res.json({
//         success: false,
//         message: 'Give me Id or Category'
//       });
//     }

//     let data;

//     if (id) {
//       data = await News.find({ id: id });

//     } else {
//       data = await News.find({ category: category });
//     }

//     if (data && data.length > 0) {
//       res.json({
//         success: true,
//         message: 'News fetched successfully',
//         data: data
//       });
//     } else {
//       res.json({
//         success: false,
//         message: 'No data found for the given id or category'
//       });
//     }

//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }
// }


// list of news
exports.newsList = async (req, res) => {
  try {
    const { id, category } = req.body;

    if (!(id || category)) {
      return res.json({
        success: false,
        message: 'Give me Id or Category'
      });
    }

    let data;

    if (id) {
      data = await News.find({ id: id });
    } else {
      data = await News.find({ category: category });
    }

    if (data && data.length > 0) {
      return res.json({
        success: true,
        message: 'News fetched successfully',
        data: data
      });
    } else {
      return res.json({
        success: false,
        message: 'No data found for the given id or category'
      });
    }

  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}



// delete news
exports.deleteNews = async (req, res) => {
  try {
    await News.findOneAndDelete({ _id: req.params.id })

    res.json({
      success: true,
      message: 'News deleted successfully'
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}