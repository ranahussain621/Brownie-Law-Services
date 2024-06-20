'use strict'

const express = require('express');
const { addCase, caseList, deleteCase, updateCase, typeOfCases, listByUser,downloadFile} = require('../controllers/caseControllers');
const router = express.Router()
const upload = require("./../utils/multerConfig"); 


router.route('/add-case').post(upload.array('file'), addCase);
router.route('/list-of-cases').get(caseList)
router.route('/delete-case/:id').delete(deleteCase)
router.route('/update-case').put(upload.array('file'), updateCase); // Updated route
router.route('/type-of-cases').get(typeOfCases)
router.route('/byuser').post(listByUser)
router.route('/download-case-file/:id').get(downloadFile)



module.exports = router;