const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
     res.status(200).json({
         message: 'Orders are fetched'
     });
});

router.post('/',(req, res, next) => {
    res.status(201).json({
        message: 'orders created'
    });
});

router.get('/:orderId',(req, res,next) => {
      const orderId = req.params.orderId;

      if(id === 'special'){
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