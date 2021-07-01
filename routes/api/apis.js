
const express = require('express');
const LoadDataProvider = require('../../engine/main/load/LoadDataProvider');
const SocketDataProvider = require('../../engine/socket/SocketDataProvider');
const router = express.Router();


router.get('/load/dataForLoad', (req, res) => res.send(LoadDataProvider.getDataForLoad()));

module.exports = router;