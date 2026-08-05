const express = require('express');
const router = express.Router();

const especialidadController = require('../controller/especialidadController');

router.get('/', especialidadController.list);
router.post('/', especialidadController.save);
router.get('/:id', especialidadController.edit);
router.put('/:id', especialidadController.update);
router.post('/:id', especialidadController.update);
router.delete('/:id', especialidadController.delete);

module.exports = router;