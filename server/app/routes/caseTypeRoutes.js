'use strict'

const express = require('express');
const { addCaseType, caseTypeList, deleteCaseType } = require('../controllers/caseTypeControllers');
const router = express.Router()


router.route('/add-case-type').post(addCaseType)
router.route('/case-type-list').get(caseTypeList)
router.route('/delete-case-type/:id').delete(deleteCaseType)
// router.route()

module.exports = router;