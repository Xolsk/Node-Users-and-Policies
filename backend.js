const express = require('express'),
    app = express();
const cors = require("cors");
const path = require('path')
bodyParser = require('body-parser');

// =================== initial settings ===================

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// ====================Routes==================

const clientsRoutes = require("./routes/clients.js");
const policiesRoutes = require("./routes/policies.js");
const helperRoutes = require ("./routes/helpers.js")

app.use("/", helperRoutes);
app.use("/clients", clientsRoutes);
app.use("/policies", policiesRoutes);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs')

//============Setting Port==========

const port = 2000
app.listen(port, () => console.log(`listening on port ${port}`))