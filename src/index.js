const express=require("express")
const path=require("path")
const exphlbs=require("express-handlebars")
const methodOverride=require("method-override")

//variables
const app=express()
require("./database")

//configuracion
app.set("port",5500)
app.set("views",path.join(__dirname,"views"))
app.engine(".hbs",exphlbs({
    defaultLayout:"main",//lamado x defecto
    layoutsDir:path.join(app.get("views"),"layouts"),//directorio por defecto de sus marcos o plantillas
    //concatena viuws con layouts
    partialsDir:path.join(app.get("views"),"partials"),
    extname:".hbs"

}));

app.set("view engine",".hbs")//utilice configuracion

//funciones
app.use(express.urlencoded({extended:false}))//no acepte formato diferente a dato
app.use(methodOverride("_method"))

//rutas
app.use(require("./routers/index"))
app.use(require("./routers/Proyectos"))
app.use(require("./routers/Usuarios"))

//archivos
app.use(express.static(path.join(__dirname,"public")))

//servidor escucha
app.listen(app.get("port"),()=>{console.log("Servidor activo y funcionando en el puerto: ",app.get("port"))})