const express = require('express');
const router = express.Router();

const citaController = require('../controller/citaController');

router.get('/', citaController.list);
router.post('/', citaController.save);
router.get('/:id', citaController.edit);
router.put('/:id', citaController.update);
router.post('/:id', citaController.update);
router.delete('/:id', citaController.delete);

module.exports = router;