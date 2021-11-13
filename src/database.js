const mongoose=require("mongoose")
const atlasUrl="mongodb+srv://admin:mintic2021@cluster0.luto9.mongodb.net/ciclo4test"

try {
    mongoose.connect(atlasUrl,{useNewUrlParser:true,useUnifiedTopology:true},
        ()=>console.log("Estoy super conectada")
        )
} 
catch (error) {
    console.log("error de conexion")
}