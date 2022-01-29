const express = require("express");
const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){

  var date = new Date();
  options = {
  weekday : "long",
  day : "numeric",
  month: "long"
  }
var day = date.toLocaleDateString("en-US", options);

  res.render('list',{kindofDay: day, newListItems: items});


});

app.post("/", function(req,res){
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");

});



app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});
