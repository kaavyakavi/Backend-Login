const express = require('express');
const storage = require('../helpers/storage');
const router = express.Router();

const LoginController = require('../controllers/login');

router.get('/getLogin', LoginController.getLogin);
router.post('/postLogin', storage, LoginController.postLogin);


module.exports = router;