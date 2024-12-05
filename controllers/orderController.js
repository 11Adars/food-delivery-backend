const orders = require('../models/order');

const placeOrder = (req, res) => {
    const { items } = req.body;
    if (!items || !items.length) {
        return res.status(400).json({ status: 'error', error: 'Order must have items' });
    }
    const order = {
        id: orders.length + 1,
        items,
        status: 'Preparing',
        createdAt: new Date(),
    };
    orders.push(order);
    res.json({ status: 'success', data: order });
};

const getOrder = (req, res) => {
    const { id } = req.params;
    const order = orders.find(o => o.id === parseInt(id));
    if (!order) {
        return res.status(404).json({ status: 'error', error: 'Order not found' });
    }
    res.json({ status: 'success', data: order });
};

module.exports = { placeOrder, getOrder };
