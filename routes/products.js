const express = require('express');

const product = require('../models/products');

// Initialize express router
const router = express.Router();

// Set default API response
router.route('/')
          .get((req, res, next) => {
               product.find()
                    .then((products) => {
                         res.json(products);
                    }).catch((err) => next(err));
          })
          .post((req, res, next) => {
             product.create(req.body)
                .then((products) => {
            
                  res.json(products);
                }).catch(next);
          });

         router.route('/:id')
            .get((req,res,next) => {
              product.findById(req.params.id)
                .then((products) => {
                  res.json(products);
                }).catch(next);
            })

            .post((req, res) => {
              res.send("Not Supported");
            });




          module.exports = router;