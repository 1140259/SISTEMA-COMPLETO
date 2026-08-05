const express = require('express');
const router = express.Router();

const historialPacienteController =
require('../controller/historialPacienteController');

router.get('/:id', historialPacienteController.list);

module.exports = router;
``