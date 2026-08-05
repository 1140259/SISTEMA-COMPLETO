const express = require('express');
const router = express.Router();
const tiposangreController = require('../controller/tiposangreController');

router.get('/', tiposangreController.list);
router.post('/', tiposangreController.save);
router.get('/:id', tiposangreController.edit);
router.post('/:id', tiposangreController.update);
router.delete('/:id', tiposangreController.delete);

module.exports = router;