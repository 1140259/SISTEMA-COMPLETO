const express = require('express');
const router = express.Router();

const estadocivilController = require('../controller/estadocivilController');

router.get('/', estadocivilController.list);
router.post('/', estadocivilController.save);
router.get('/:id', estadocivilController.edit);
router.put('/:id', estadocivilController.update);
router.post('/:id', estadocivilController.update);
router.delete('/:id', estadocivilController.delete);

module.exports = router;