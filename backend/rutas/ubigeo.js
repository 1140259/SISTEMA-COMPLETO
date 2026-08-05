const express = require('express');
const router = express.Router();
const ubigeoController = require('../controller/ubigeoController');

router.get('/', ubigeoController.list);
router.post('/', ubigeoController.save);
router.get('/:id', ubigeoController.edit);
router.post('/:id', ubigeoController.update);
router.delete('/:id', ubigeoController.delete);

module.exports = router;