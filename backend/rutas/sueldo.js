const express = require('express');
const router = express.Router();
const sueldoController = require('../controller/sueldoController');

router.get('/', sueldoController.list);
router.post('/', sueldoController.save);
router.get('/:id', sueldoController.edit);
router.post('/:id', sueldoController.update);
router.delete('/:id', sueldoController.delete);

module.exports = router;