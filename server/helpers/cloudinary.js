const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "du44kbibc",
  api_key: "899985489581868",
  api_secret: "pJubX_ogbACArcO0m6hbM8M3Npc",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
