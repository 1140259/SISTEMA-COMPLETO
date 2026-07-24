const express = require('express');
const router = express.Router();
const tiposangreController = require('../controller/tiposangreController');

router.get('/', tiposangreController.list);

module.exports = router;