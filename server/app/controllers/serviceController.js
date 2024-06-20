'use strict'

const s3 = require('../utils/s3Service')
const Service = require('../model/Service')

exports.addService = async (req, res) => {

    try {
        const { user_id, title, description } = req.body;

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
        const Data = await Service.create({
            user_id: user_id,
            title: title,
            description: description,
            image: req.body.image
        });

        res.json({
            success: true,
            message: " Service added successfully",
            'data': Data
        });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


exports.getServiceList = async (req, res) => {
    try {
        const services = await Service.find();
        res.json({
            success: true,
            message: 'Service list retrieved successfully',
            data: services,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error retrieving service list',
        });
    }
};


exports.getServiceById = async (req, res) => {
    try {
        const serviceId = req.body.id;
        const service = await Service.findById(serviceId);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found',
            });
        }

        res.json({
            success: true,
            message: 'Service retrieved successfully',
            data: service,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error retrieving service by ID',
        });
    }
};


exports.deleteService = async (req, res) => {
    try {
        const serviceId = req.params.id;
        const service = await Service.findById(serviceId);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found',
            });
        }

        await Service.findByIdAndDelete(serviceId);

        res.json({
            success: true,
            message: 'Service deleted successfully',
            data: service,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error deleting service',
        });
    }
};



exports.updateService = async (req, res) => {
    try {
  
      const id = req.body.id;
      if (!id) {
        res.status(400).json({
          success: false,
          message: "'id' is missing."
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
      await Service.findOneAndUpdate(updateQuery, req.body, { useFindAndModify: false }).then(data => {
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
  
  
  exports.listByUser = async (req, res) => {
    try {
      const serviceData = await Service.find({user_id:req.body.user_id})
  
      res.json({
        success: true,
        'data': serviceData
      });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }