const express = require('express')
const router = express.Router()

class clientsController{

    async getClientById(req,res,next){
        console.log("inbyId");
    }

    login(req,res,next){
        console.log("inLog")
    }

    async getClientByName(req,res,next){
    console.log("inByName");}
}

module.exports = new clientsController;
