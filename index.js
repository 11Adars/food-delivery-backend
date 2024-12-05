const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');
const { updateOrderStatus } = require('./utils/cronJobs');

const app = express();


app.use(bodyParser.json());


app.use(menuRoutes);
app.use(orderRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


updateOrderStatus();
