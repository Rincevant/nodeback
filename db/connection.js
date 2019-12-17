const {Client} = require('pg')

// Connection en local
const client = new Client({
    user : "userDB",
    host : "hostDB",
    password : "passDB",
    database: "databaseName",
    port : 5432
})

//Connection via docker
/*const client = new Client({
    connectionString : "postgres://user:pass@postgres:5432/db"    
})*/

module.exports = client
