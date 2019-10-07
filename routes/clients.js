const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/clients.js');

    router.get("/", controller.loginMenu); //Get you to the simple log in menu.

    router.post("/login", controller.login) //Validates log in data.

    router.get("/byId:id", controller.getClientById); //Gets user data filtered by id.

    router.get("/byName:name", controller.getClientByName); //Gets user data filtered by name.

    module.exports = router;