const express = require('express');
const router = express.Router();
const KomikController = require('../controller/KomikController');

router.get('/komik', KomikController.getAllKomik);

module.exports = router;
