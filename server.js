const express = require('express');
const app = express();
const db = require('./db');
const routerList = require("./router/router");
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello Whatsapp!');
});

app.use('/', routerList);

var port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});