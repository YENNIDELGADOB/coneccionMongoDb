const express=require("express")
const router=express.Router()

router.get("/Proyectos",(req,res)=>{res.send("Nuestros proyectos en la BD")})

module.exports=router;