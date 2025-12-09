// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { contactUser } = require('../controllers/userController');  // <-- import check करा

router.post('/contact', contactUser);

module.exports = router;
