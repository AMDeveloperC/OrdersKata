const express = require('express');
const app = express();
const PORT = 3000;

const ORDERS = '/orders'
const orders = require('./data_layer/data');
const Order = require('./model_layer/order');

// Middleware to parse request json request body
app.use(express.json());

app.post(ORDERS, (req, res) => {
    if (req === undefined) {
        res.status(400).json({error: 'Bad Request'});
    }
    const order = new Order(req.body.customer, req.body.object, parseFloat(req.body.price));
    res.status(201).json(order);
});

app.get(ORDERS, (req, res) => {
    console.log(req);
    res.json(orders);
});

app.get(ORDERS+'/:id', (req, res) => {
    const orderId = parseInt(req.params.id);
    const order = orders.find(o => o._id === orderId);
    if (order) {
        res.json(order);
    } else {
        res.status(404).send('Order not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
