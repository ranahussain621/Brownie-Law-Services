const multer = require('multer');
const path = require('path');

// Define a shared storage configuration for file uploads
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        const fileType = path.extname(file.originalname).toLowerCase();
        cb(null, Date.now() + fileType);
    },
});

const fileFilter = function (req, file, cb) {
    const allowedFileExtensions = ['.jpeg', '.jpg', '.png', '.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();

    if (!allowedFileExtensions.includes(ext)) {
        return cb(new Error('Only jpeg, jpg, png, pdf, doc, and docx files are allowed!'));
    }

    cb(null, true);
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
