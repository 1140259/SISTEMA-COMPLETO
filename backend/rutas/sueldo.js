const express = require('express');
const router = express.Router();
const sueldoController = require('../controller/sueldoController');

router.get('/', sueldoController.list);
router.post('/', sueldoController.save);

module.exports = router;