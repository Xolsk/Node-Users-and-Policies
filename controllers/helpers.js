const express = require('express')


class helperController {

	loginDisplay(req, res) {
		res.render('login')
	};

	async menuDisplay(req, res) {
		const data = { role: req.body.role, email: req.body.email };
		if (req.body.role==="admin" || req.body.role==="user"){
		res.render('menu', data)}
		else{
			const message={message:"You must be validated to access the menu.Head to localshost:2000/clients in order to access."}
			res.render("error", message)
		}
	}
}

module.exports = new helperController;