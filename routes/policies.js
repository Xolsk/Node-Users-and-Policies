const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/policies.js');

    router.get ("/", controller.checkAdmin);  //makes sure the user has admin status.

    router.get("/getPolbyName:name", controller.getPolicyByName); //Gets the list of policies by name

    router.get("/getUserByPol:policy", controller.getUserByPolicy); //Gets a particular user matched by a policy.

    module.exports = router;