const express = require('express');
const router = express.Router();
const areaController = require('../controller/areaController');

router.get('/', areaController.list);
router.post('/', areaController.save);
router.get('/:id', areaController.edit);
router.post('/:id', areaController.update);
router.delete('/:id', areaController.delete);

module.exports = router;