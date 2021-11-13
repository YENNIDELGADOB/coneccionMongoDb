const express=require("express")
const router=express.Router()

router.get("/Usuarios/singup",(req,res)=>{res.send("Aquí te vas a registrar ")})
router.get("/Usuarios/singin",(req,res)=>{res.send("Aquí inicias secion")})

module.exports=router;