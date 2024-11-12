const express = require('express');
const app = express();
// const db = require('./db');
const routerList = require("./router/router");
const bodyParser = require('body-parser');
const cors = require('cors');

const passport = require('./helpers/passport-setup');
const session = require('express-session');

// Enable CORS
// app.use(cors());
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true, // Allow credentials (cookies) to be sent
  };
  app.use(cors(corsOptions));
// Allow only your Next.js app
// app.use(cors({
//     origin: 'http://localhost:3000', 
// }));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session(
//     { 
//         secret: process.env.SESSION_SECRET, 
//         resave: false, 
//         saveUninitialized: true 
//     }
// ));
// app.use(passport.initialize());
// app.use(passport.session());

const LogFunction = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Url accessed: ${req.originalUrl}`);
    next(); 
}
app.use(LogFunction);

// app.use('/',passport.authenticate('local'), routerList);
app.use('/', routerList);

var port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});