import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});  

let upload = multer({ storage: storage });

export default upload.array('images', 4)

