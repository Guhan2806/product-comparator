const express=require('express')
const router =express.Router()
router.post('/result',(req,res)=>{
    const {search}=req.body
    res.render("Result",{search:search})
})
module.exports=router