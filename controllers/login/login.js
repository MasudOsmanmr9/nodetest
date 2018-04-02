var express = require("express");
var router = express.Router();

router.get('/',(req,res)=>{
   // console.log(req);
    res.render("login/login",{message:"all ok"});
});
router.post('/',(req,res)=>{
    var uname = req.body.username;
    var pass = req.body.password;
    console.log("username :"+uname+" pass :"+pass);
    
});
module.exports = router;