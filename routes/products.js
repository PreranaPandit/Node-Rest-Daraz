const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function(req, res, cb){
      cb(null, "./public/uploads");
    },

    filename: function(req, file, cb){
        let ext = path.extname(file.originalname);
        cb(null,"products" + Date.now() + file.originalname);
    }
});




module.exports = router;
