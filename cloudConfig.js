const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({ //Setting of the cloud configuration key name should remain the same
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({  //Define where to store the file and in which format
  cloudinary: cloudinary,
  params: {
    folder: 'wander',
    allowedFormat: ["png", "jpeg", "jpg"], // type of file accepted
  },
});


module.exports = {
    cloudinary,
    storage,
}