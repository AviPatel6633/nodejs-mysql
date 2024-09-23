const express = require('express');
const app = express();
// const db = require('./db');
const routerList = require("./router/router");
const bodyParser = require('body-parser');
const cors = require('cors');

// Enable CORS
app.use(cors());

// Allow only your Next.js app
// app.use(cors({
//     origin: 'http://localhost:3000', 
// }));

app.use(bodyParser.json());

const LogFunction = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Url accessed: ${req.originalUrl}`);
    next(); 
}
app.use(LogFunction);

app.use('/', routerList);

var port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});