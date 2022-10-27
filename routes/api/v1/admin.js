const express = require('express');
const router = express.Router();

const adminController = require('../../../controllers/api/v1/admin_api');

router.post('/create',adminController.signUp);
router.post('/login',adminController.createSession);

module.exports = router;