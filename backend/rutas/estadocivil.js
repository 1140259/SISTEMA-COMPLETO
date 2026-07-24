const express = require('express');
const router = express.Router();
const estadocivilController = require('../controller/estadocivilController');

router.get('/', estadocivilController.list);

module.exports = router;