/**
 * uploadConfig - Middleware de configuration des uploads
 */

/* Imports */
const multer = require("multer");

/* Variables & Constantes */
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "application/pdf": "pdf",
};

/* Middleware */

/* Config enregistrement  */
const storage = multer.diskStorage({
  //enregistrement dans fichier uploads
  destination: (req, file, callback) => {
    callback(null, "public/uploads");
  },

  // nom des fichiers et extension
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

/* Export accepte plusieurs fichiers */
module.exports = multer({ storage: storage }).fields([
  { name: "logo", maxCount: 1 },
  { name: "couv", maxCount: 1 },
  { name: "dossier", maxCount: 1 },
  { name: "photoPortrait", maxCount: 1 },
]);
