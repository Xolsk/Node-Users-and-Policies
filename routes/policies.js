const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/policies.js');
    const validator = require ("../helpers/validator.js");

    router.get("/polbyName/:name",validator, controller.policyByName); //Gets the list of policies by name.

    router.get("/userByPol/:policy", validator,  controller.userByPolicy); //Gets a particular user matched by a policy Id.

    module.exports = router;