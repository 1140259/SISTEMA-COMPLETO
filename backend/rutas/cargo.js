const express = require('express');
const router = express.Router();
const cargoController = require('../controller/cargoController');

router.get('/', cargoController.list);
router.post('/', cargoController.save);
router.delete('/:id', cargoController.delete);

module.exports = router;