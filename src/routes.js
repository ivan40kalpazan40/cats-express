const express = require('express');
const homeController = require('./controllers/homeController');
const catController = require('./controllers/catController');
const router = express.Router();

router.use(homeController);
router.use('/cats', catController);

module.exports = router;
