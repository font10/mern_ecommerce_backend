import multer from 'multer';
import { v4 as uuid } from 'uuid'

const types = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg']

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/public/images');
    },
    filename: function (req, file, cb) {
        cb(null, `${uuid()}-${file.originalname}`);
    }
});  

const fileFilter = (req, file, cb) => {
    if(types.includes(file.mimetype) ) {
      cb(null, true)
    }
    else {
      cb({ message: 'Unsupported file format' }, false)
    }
  }
  
  export const upload = multer({ 
    storage,
    fileFilter,
    limits: {
      fileSize: 1000000,
      files: 4
    }
  })



