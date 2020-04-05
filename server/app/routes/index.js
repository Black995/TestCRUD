const express = require('express');
const router = express.Router();

router.use('/', require('./UserRoute'));

module.exports = router;