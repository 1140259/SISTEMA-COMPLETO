const express = require('express');
const router = express.Router();
const areaController = require('../controller/areaController');

router.get('/', areaController.list);
router.post('/', areaController.save);

module.exports = router;