const express = require('express');
const { placeOrder, getOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/orders', placeOrder);
router.get('/orders/:id', getOrder);

module.exports = router;
