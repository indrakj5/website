const express = require('express');
const router = express.Router();
const API = require('../controllers/body');

router.get('/body', API.getBody);
router.post('/postbody', API.postBody);

module.exports = router;