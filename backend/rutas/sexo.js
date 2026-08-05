const express = require('express');
const router = express.Router();
const sexoController = require('../controller/sexoController');

router.get('/', sexoController.list);
router.post('/', sexoController.save);
router.get('/:id', sexoController.edit);
router.post('/:id', sexoController.update);
router.delete('/:id', sexoController.delete);

module.exports = router;