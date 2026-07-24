const express = require('express');
const router = express.Router();
const licenciaConducController = require('../controller/licenciaConducController');

router.get('/', licenciaConducController.list);

module.exports = router;