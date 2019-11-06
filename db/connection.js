const {Client} = require('pg')

// Connection en local
const client = new Client({
    user : "bojumrelclrwya",
    host : "ec2-46-51-190-87.eu-west-1.compute.amazonaws.com",
    password : "711232073c16b92ec69f06bfe66ff7b361b32a7e4b1be303d26ac8cbef146602",
    database: "d9kleibpcf1nds",
    port : 5432
})

//Connection via docker
/*const client = new Client({
    connectionString : "postgres://user:pass@postgres:5432/db"    
})*/

module.exports = client