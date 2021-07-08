
const express = require('express');
const LoadDataProvider = require('../../engine/load/LoadDataProvider');
const SocketDataProvider = require('../../engine/socket/SocketDataProvider');
const LoadDataService = require('../../httpEndPoints/LoadDataService');
const PauseSimulationService = require('../../httpEndPoints/PauseSimulationService');
const ResumeSimulationService = require('../../httpEndPoints/ResumeSimulationService');
const StartSimulationService = require('../../httpEndPoints/StartSimulationService');
const StopSimulationService = require('../../httpEndPoints/StopSimuationService');
const router = express.Router();


router.get('/load/dataForLoad', (req, res) => res.send(LoadDataService.load()));
router.get('/start', (req, res) => res.send(StartSimulationService.start()));
router.get('/stop', (req, res) => res.send(StopSimulationService.stop()));
router.get('/pause', (req, res) => res.send(PauseSimulationService.pause()));
router.get('/resume', (req, res) => res.send(ResumeSimulationService.resume()));

module.exports = router;