const express = require('express');
const router = express.Router();

const censusController = require('../app/controllers/CensusController');

// newsController.index
router.get('/:slug', censusController.show); 
module.exports = router; 