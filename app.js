var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


var campgrounds = [
  {name: "Granite Hill", image: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/280h/HA1RQCRQJ7.jpg"},
  {name: "Big Creek", image: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/280h/KCYAQXCPFI.jpg"},
  {name: "Great Lake", image: "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/280h/SBB7QWZJ6E.jpg"}
];

app.get("/", function(req,res){
  res.render("landing"); 
});

app.get("/campgrounds", function(req,res){

 res.render("campgrounds", {campgrounds: campgrounds}); 
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});

app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});


app.listen(process.env.PORT, process.env.IP, function(){
  console.log("The YelpCamp server has started"); 
});