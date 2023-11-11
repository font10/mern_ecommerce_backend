import multer from 'multer'
import { v4 as uuid } from 'uuid'

const types = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg']

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${uuid()}-${file.originalname}`);
  }
});


const fileFilter = (req, file, cb) => {
  console.log(file.mimetype)
  if(types.includes(file.mimetype) ) {
    cb(null, true)
  }
  else {
    cb({ message: 'Unsupported file format' }, false)
  }
}

export const upload = multer({ 
  storage,
  //fileFilter,
  limits: {
    fileSize: 2000000,
    files: 4
  }
})

