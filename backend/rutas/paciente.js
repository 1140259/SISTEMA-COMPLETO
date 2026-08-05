const express = require('express');
const router = express.Router();

const pacienteController = require('../controller/pacienteController');

router.get('/', pacienteController.list);
router.post('/', pacienteController.save);
router.get('/:id', pacienteController.edit);
router.put('/:id', pacienteController.update);
router.post('/:id', pacienteController.update);
router.delete('/:id', pacienteController.delete);

module.exports = router;