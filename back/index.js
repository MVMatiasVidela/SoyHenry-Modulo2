require('dotenv').config()
const app = require ('./src/app')
const dbConnection = require('./src/config/dbConnection')

const { PORT } = process.env

dbConnection()
.then(()=> app.listen(PORT, ()=>console.log(`server is listening on port ${PORT}`)))
.catch((err)=> console.log ('Fallo en la conexion' + err.message))
