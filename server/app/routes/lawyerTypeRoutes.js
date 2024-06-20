'use strict'

const express = require('express');
const { addLawyerType, lawyerTypeList, deleteLawyerType } = require('../controllers/lawyerTypeController');
const router = express.Router()


router.route('/add-lawyer-type').post(addLawyerType)
router.route('/lawyer-type-list').get(lawyerTypeList)
router.route('/delete-lawyer-type/:id').delete(deleteLawyerType)

module.exports = router;