const express = require('express')
const router = express.Router()

class policiesController{

    async getUserByPolicy(req,res,next){
        console.log("byPolicy");
    }

    async checkAdmin (req,res,next){
        console.log("checkadmin");
    }

    async getPolicyByName(req,res,next){
    console.log("byName");}
}

module.exports = new policiesController;