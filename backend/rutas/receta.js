const express = require('express');
const router = express.Router();

const recetaController = require('../controller/recetaController');

router.get('/', recetaController.list);

router.post('/', recetaController.save);

router.get('/imprimir/:id', recetaController.getOne);

router.get('/:id', recetaController.getDetalle);

router.delete('/:id', recetaController.delete);

module.exports = router;