const multer = require('multer');
const MIME_TYPE_MAP = {
  'application/pdf': 'pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
  'application/msword' : 'doc',
  'application/vnd.ms-excel': 'csv'
}

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'documents');
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-')
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, Date.now() + '-' + name);
  }
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'application/pdf' ||
    file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    file.mimetype === 'application/msword' ||
    file.mimetype === 'application/vnd.ms-excel'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

module.exports = multer({
  storage: fileStorage,
  fileFilter: fileFilter
}).single('attachment');