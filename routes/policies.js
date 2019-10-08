const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/policies.js');

    router.get("/polbyName/:name", controller.policyByName); //Gets the list of policies by name.

    router.get("/userByPol/:policy", controller.userByPolicy); //Gets a particular user matched by a policy Id.

    module.exports = router;