const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/helpers.js');


    router.get ("/", controller.loginDisplay); //Displays first page to Log In.

    module.exports = router;