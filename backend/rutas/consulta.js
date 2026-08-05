const express = require('express');
const router = express.Router();

const consultaController = require('../controller/consultaController');

router.get('/', consultaController.list);
router.post('/', consultaController.save);
router.get('/:id', consultaController.edit);
router.put('/:id', consultaController.update);
router.post('/:id', consultaController.update);
router.delete('/:id', consultaController.delete);

module.exports = router;