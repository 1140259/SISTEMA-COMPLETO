const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

router.get('/', loginController.list);
router.post('/', loginController.save);

module.exports = router;