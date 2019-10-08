const fetch = require("node-fetch");

class clientsController {

    async login(req, res) {
        let data = {};
        const input = req.body.input;
        try {
            if (input === "admin" || input === "user") {
                data = { role: input };
            }
            else {
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
                                data = { email: clientList[i].email, role: clientList[i].role };
                                break;
                            }
                        }
                    })
                    .catch(e => { console.log(e) })
            }
            if (data.role === undefined) {
                const message = { message: "Not a valid user." }
                res.render("error", message);
            }
            else {
                res.render("menu", data)
            }
        }
        catch (error) { res.send({ error }) }
    }

    async getClientById(req, res) {
        const id = req.params.id;
        let data = {}
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
                        if (clientList[i].id === id) {
                            data = { match: clientList[i]};
                            break;
                        }
                        else {data={match:"ID has no match."}};
                    }
                    res.send(data)
                })
                .catch(e => { console.log(e) })
        }
        catch (error) { res.send({ error }) }
    }


    async getClientByName(req, res) {
        const name = req.params.name;
        let data = {}
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
                        if (clientList[i].name === name) {
                            data = { match: clientList[i]};
                            break;
                        }
                        else {data={match:"Name has no match."}};
                    }
                    res.send(data)
                })
                .catch(e => { console.log(e) })
        }
        catch (error) { res.send({ error }) }
    }
    }


module.exports = new clientsController;
