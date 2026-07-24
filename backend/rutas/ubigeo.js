const express = require('express');
const router = express.Router();
const ubigeoController = require('../controller/ubigeoController');

router.get('/', ubigeoController.list);

module.exports = router;