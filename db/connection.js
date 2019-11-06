const {Client} = require('pg')

// Connection en local
const client = new Client({
    user : "user",
    password : "pass",
    database: "db",
    port : 35432
})

//Connection via docker
/*const client = new Client({
    connectionString : "postgres://user:pass@postgres:5432/db"    
})*/

module.exports = client