const express = require('express'),
    router = express.Router();
controller = require('../controllers/clients.js');
const validator = require ("../helpers/validator.js");

router.post("/login", controller.login) //Validates log in data.

router.get("/byId/:id", validator, controller.clientById); //Gets user data filtered by id.

router.get("/byName/:name", validator, controller.clientByName); //Gets user data filtered by name.

module.exports = router;