const fetch = require("node-fetch");
const jwt = require('jsonwebtoken');

class clientsController {

    async login(req, res) {
        var user = {};
        const input = req.body.input;
        try {
            await fetch('http://www.mocky.io/v2/5808862710000087232b75ac')
                .then(answer => {
                    if (answer.status === 200) {
                        return answer.json();
                    }
                })
                .then(list => {
                    const clientList = list.clients;
                    for (let i in clientList) {
                        if (clientList[i].email === input) {
                            user = { email: clientList[i].email, role: clientList[i].role };
                        }
                    }
                    if (user.role === undefined) {
                        const message = { message: "Not a valid user." }
                        res.status(400).render("error", message);
                    }
                    else {
                        const token = jwt.sign(user, 'secret', { expiresIn: 7200 })
                        res.render("menu", {user, token})
                    }
                })
                .catch(e => { console.log(e) })
        }
        catch (error) {
            res.send({ error })
        }
    }

    async clientById(req, res) {
        const id = req.params.id;

        try {
            await fetch('http://www.mocky.io/v2/5808862710000087232b75ac')
                .then(answer => {
                    if (answer.status === 200) {
                        return answer.json();
                    }
                })
                .then(response => {
                    const clientList = response.clients;
                    for (let i in clientList) {
                        if (clientList[i].id === id) {
                            var foundClient = { match: clientList[i] };
                            res.send(foundClient)
                            break;
                        }
                    }
                    if (foundClient === undefined) {
                        const message = { message: "No client by the provided Id." }
                        res.status(400).render("error", message);
                    }
                })
                .catch(e => { console.log(e) })
        }
        catch (error) { res.send({ error }) }
    }


    async clientByName(req, res) {
        const name = req.params.name;
        try {
            await fetch('http://www.mocky.io/v2/5808862710000087232b75ac')
                .then(answer => {
                    if (answer.status === 200) {
                        return answer.json();
                    }
                })
                .then(response => {
                    const clientList = response.clients;
                    for (let i in clientList) {
                        if (clientList[i].name === name) {
                            var foundClient = clientList[i];
                            res.send(foundClient)
                            break;
                        }
                    }
                    if (foundClient === undefined) {
                        const message = { message: "No client with provided name." };
                        res.status(400).render("error", message)
                    }
                })
                .catch(error => { console.log(error) })
        }
        catch (error) { res.send({ error }) }
    }
}


module.exports = new clientsController;
