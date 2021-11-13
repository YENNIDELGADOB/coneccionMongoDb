const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{res.send("Hola  : D ")})
router.get("/aboutus",(req,res)=>{res.send("todo sobre nosotros")})


module.exports=router;