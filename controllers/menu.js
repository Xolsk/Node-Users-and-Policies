const express = require('express')


class menuController {

	async menuDisplay(req, res) {
		const data = { role: req.body.role, email: req.body.email };
		res.render('menu', data)
	}
}

module.exports = new menuController;