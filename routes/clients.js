const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/clients.js');

    router.get("/", controller.login); //Logs in order to know if user is an admin or not

    router.get("/byId:id", controller.getClientById); //Gets user data filtered by id.

    router.get("/byName:name", controller.getClientByName); //Gets user data filtered by name.

    module.exports = router;