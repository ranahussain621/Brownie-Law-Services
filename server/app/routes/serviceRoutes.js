'use strict'

const express = require('express')
const router = express.Router()
const upload = require("./../utils/multerConfig"); // Import the multer configuration
const { addService, getServiceList, getServiceById, deleteService, updateService, listByUser } = require('../controllers/serviceController');


router.post('/',upload.fields([{name: "image",maxCount: 5,}, ]),addService);
router.route('/list').get(getServiceList)
router.route('/detail').post(getServiceById)
router.route('/delete/:id').delete(deleteService)
router.put('/',upload.fields([{name: "image",maxCount: 5,}, ]),updateService);
router.route('/byuser').post(listByUser)


module.exports = router;