const express = require('express');
const router = express.Router();

const loginWithGoogleApi = require('./loginWithGoogle');

router.use('/api', loginWithGoogleApi);

module.exports = router;
