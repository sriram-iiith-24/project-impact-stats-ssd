// backend/routes/paperRoutes.js
const express = require('express');
const { searchPapers } = require('../controllers/paperController');

const router = express.Router();

router.get('/search', searchPapers);

module.exports = router;
