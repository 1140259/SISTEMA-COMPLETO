const express = require('express');
const router = express.Router();

const medicoController = require('../controller/medicoController');

router.get('/', medicoController.list);
router.post('/', medicoController.save);
router.get('/:id', medicoController.edit);
router.put('/:id', medicoController.update);
router.post('/:id', medicoController.update);
router.delete('/:id', medicoController.delete);

module.exports = router;