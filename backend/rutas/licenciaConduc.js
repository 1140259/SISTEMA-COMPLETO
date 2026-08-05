const express = require('express');
const router = express.Router();
const licenciaConducController = require('../controller/licenciaConducController');

router.get('/', licenciaConducController.list);
router.post('/', licenciaConducController.save);
router.get('/:id', licenciaConducController.edit);
router.post('/:id', licenciaConducController.update);
router.delete('/:id', licenciaConducController.delete);

module.exports = router;