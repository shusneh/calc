const exp=require("express");
const bodyParser=require("body-parser");
const app=exp();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/index.html",function(req,res){
    var num1=Number(req.body.nu);
    var num2=Number(req.body.num2);
    var resu=num1+num2;
    res.send("calculated value is" +resu+ "thanks for posting");
});
app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmi",function(req,res){
    var num1=parseFloat(req.body.height);
    var num2=parseFloat(req.body.weight);
    var resu=num1/num2;
    res.send("calculated value isthanks" +resu + "for posting");
});
app.listen(3000,function(){
    console.log("server is running");
});