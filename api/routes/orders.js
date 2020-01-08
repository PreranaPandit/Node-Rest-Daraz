const express = require('express');
const router = express.Router();

//Handle incoming GET requests to /orders
router.get('/',(req, res, next) => {
     res.status(200).json({
         message: 'Orders are fetched'
     });
});

router.post('/',(req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'orders created',
        order: order
    });
});

router.get('/:orderId',(req, res,next) => {
      const orderId = req.params.orderId;

      if(orderId === 'special'){
          res.status(200).json({
              message: 'order details',
              orderId: orderId
          });
      }
     
});

// router.patch('/:productId',(req, res,next) => {
//   res.status(200).json({
//       message: 'Updated product'
//   });
// });

router.delete('/:orderId',(req, res,next) => {
    res.status(200).json({
        message: 'deleted product',
        orderId: req.params.orderId
    });
  });

module.exports = router;