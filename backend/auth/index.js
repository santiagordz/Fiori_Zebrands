const express = require('express');
const router = express.Router();

const loginWithGoogleApi = require('./loginWithGoogle');

router.use(loginWithGoogleApi);

module.exports = router;
