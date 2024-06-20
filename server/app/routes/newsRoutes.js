'use strict'

const express = require('express');
const { addNews, newsList, deleteNews, updateNews } = require('../controllers/newsController');
const router = express.Router()
const upload = require('../utils/multerConfig')


router.post('/add-news',upload.fields([{name: "image",maxCount: 5,}, ]),addNews);
router.route('/news-list').post(newsList)
router.route('/delete-news/:id').delete(deleteNews)
// router.route('/update-news').put(updateNews)
router.put('/update-news',upload.fields([{name: "image",maxCount: 5,}, ]),updateNews);


module.exports = router;