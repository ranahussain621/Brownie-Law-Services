'use strict'

const express = require('express');
const { getAllFirms } = require('../controllers/firmcontrollers');
const router = express.Router()

router.route('/').get(getAllFirms)


module.exports = router;