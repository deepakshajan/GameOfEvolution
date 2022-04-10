
const express = require('express');
const CellDataService = require('../../httpEndPoints/CellDataService');
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
router.get('/cellData', (req, res) => res.send(CellDataService.getCellData(req)));

module.exports = router;