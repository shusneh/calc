const exp=require("express");
const bodyParser=require("body-parser");
const app=exp();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmi",function(req,res){
    var num1=Number(req.body.height);
    var num2=Number(req.body.weight);
    var resu=num1/num2;
    res.send("calculated value isthanks" +resu + "for posting");
});
app.listen(300,function(){
    console.log("server is running");
});