const express = require('express');
const { addMenuItem, getMenu } = require('../controllers/menuController');
const router = express.Router();

router.post('/menu', addMenuItem);
router.get('/menu', getMenu);

module.exports = router;
