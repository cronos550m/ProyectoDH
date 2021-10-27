const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../src/public/images/user'))
    },
    filename: function (req, file, cb) {
      const fileName = "user_" + Date.now() + file.originalname;
      cb(null, fileName);
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports= upload;