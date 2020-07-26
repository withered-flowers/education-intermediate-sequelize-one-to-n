const express = require('express');
const router = express.Router();

const Controller = require('../controllers/controller.js');

const creatorRouter = require('./creators.js');
const videoRouter = require('./videos.js');
const combinationRouter = require('./combinations.js')

router.get('/', Controller.getRootHandler);
router.use('/creators', creatorRouter);
router.use('/videos', videoRouter);
router.use('/combos', combinationRouter);

module.exports = router;