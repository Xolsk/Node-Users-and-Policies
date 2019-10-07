const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/menu.js');


    router.get ("/", controller.menuDisplay); //Displays main page.

    module.exports = router;