const sql = require('mssql')
require('dotenv').config()

const Config = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.DB_HOST,
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

const poolpromise = new sql.ConnectionPool(Config).connect().then(
    pool =>{
        console.log('connected to pool')
        return pool
    }
).catch(err =>{
    console.log("error" + err)
})


module.exports = {sql , poolpromise}