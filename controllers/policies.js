const fetch = require("node-fetch");

class policiesController {

    async userByPolicy(req, res) {
        const policyId = req.params.policy;
        await fetch("http://www.mocky.io/v2/580891a4100000e8242b75c5")
            .then(answer => {
                if (answer.status === 200) {
                    return answer.json();
                }
            })
            .then(list => {
                const policyList = list.policies
                for (let i in policyList) {
                    if (policyList[i].id === policyId) {
                        var clientId = policyList[i].clientId;
                        fetch('http://www.mocky.io/v2/5808862710000087232b75ac')
                            .then(answer => {
                                if (answer.status === 200) {
                                    return answer.json();
                                }
                            })
                            .then(list => {
                                let clientList = list.clients;
                                for (let i in clientList) {
                                    if (clientId === clientList[i].id) {
                                        var match = clientList[i];
                                        res.send(match)
                                        break;
                                    }
                                }
                                if (match === undefined) {
                                    const message = { message: "The user ID on the policy data does not correspond to any client." }
                                    res.render("error", message)
                                }
                            })

                            .catch(error => { console.log(error) })
                    }

                }
                if (clientId === undefined) {
                    const message = { message: "No match with that policy number." }
                    res.render("error", message)
                }
            })
            .catch(error => { console.log(error) })

    }

    async policyByName(req, res) {
        const name = req.params.name;
        let policies = [];
        let relevantClientId;
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
                        relevantClientId = clientList[i].id;
                        fetch('http://www.mocky.io/v2/580891a4100000e8242b75c5')
                            .then(answer => {
                                if (answer.status === 200) {
                                    return answer.json();
                                }
                            })
                            .then(list => {
                                const policyList = list.policies;
                                for (let i in policyList) {
                                    if (policyList[i].clientId === relevantClientId) {
                                        policies.push(policyList[i]);
                                    }
                                }
                                if (policies === []) {
                                    const message = { message: "The user ID has no associated policies" };
                                    res.render("error", message);
                                }
                                res.send({ policies });
                            })
                            .catch(e => { console.log(e) })
                    };
                };
                if (relevantClientId === undefined) {
                    const message = { message: "We did not found any client matching that Id." }
                    res.render("error", message)
                };
            })
            .catch(e => { console.log(e) })

    }
}

module.exports = new policiesController;