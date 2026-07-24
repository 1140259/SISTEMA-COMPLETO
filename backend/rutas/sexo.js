const express = require('express');
const router = express.Router();
const sexoController = require('../controller/sexoController');

router.get('/', sexoController.list);

module.exports = router;