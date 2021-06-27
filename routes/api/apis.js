
const express = require('express');
const DataProvider = require('../../engine/DataProvider');
const router = express.Router();


router.get('/load/dataForLoad', (req, res) => res.send(DataProvider.getDataForLandingPageLoad()));

module.exports = router;