var PORT = process.env.PORT || 3000
const express = require('express')
const bodyParser = require('body-parser')
const client = require('./db/connection')

//Declaration des routes
var users = require('./routes/users');
var tasks = require('./routes/tasks');
var auth = require('./auth/auth');

client.connect()

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended : false}))

// Cors policy
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE")
    next();
});

app.use('/users', users);
app.use('/auth', auth);
app.use('/tasks', tasks);

app.get("/", (req,res) => {
    res.send("Hello BACKLOG")
})

app.get("/test", (req,res) => {
    res.send("Hello BACKLOG")
})

app.listen(PORT, () => console.log("Listening on port " + PORT))
module.exports = app;