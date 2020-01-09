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

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      //accept
      cb(null, true);
    } else {
      //reject a file
      cb(new Error("File format not supported"), false);
    }
  };
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 10 //10MB
    },
    fileFilter: fileFilter
  });



//products route started
  const Product = require("../models/products");

  //route for adding products
  router.post("/", upload.single("product_image"), (req, res) => {
      const product = new Product({
          name: req.body.name,
          price: req.body.price,
          image:req.file.path
      });

      product
           .save()
            .then(result => {
                res.status(201).json({
                    message: "Product added succesffully"
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    message: err
                });
            });
  });

  




module.exports = router;
