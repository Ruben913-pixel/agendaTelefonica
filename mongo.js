const mongoose = require("mongoose")
process.loadEnvFile()

const url = process.env.MONGO_URL 


mongoose.connect(url).then(()=> {
    console.log("Conectado a la base de datos")
}).catch(()=>{
    console.log("Error al conectar a la base de datos")

  
})


