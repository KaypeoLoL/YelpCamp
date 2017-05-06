var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
      name: "Cloud's Rest",
      image:"https://images.pexels.com/photos/188940/pexels-photo-188940.jpeg?h=350&auto=compress&cs=tinysrgb",
      description: "blablabla"
    },
    {
      name: "Campfire Rest",
      image:"https://images.pexels.com/photos/197255/pexels-photo-197255.jpeg?h=350&auto=compress&cs=tinysrgb",
      description: " sad sd das dsda sa blablabla"
    },
    {
      name: "Moutain Rest",
      image:"https://images.pexels.com/photos/192518/pexels-photo-192518.jpeg?h=350&auto=compress&cs=tinysrgb",
      description: "sa ds das b sadasdlablabla"
    },
    {
      name: "River Rest",
      image:"https://images.pexels.com/photos/26157/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb",
      description: "blablabsadsadasdsadasdla"
    }
];

function seedDB(){
  //Remove all campgrounds
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    }else {
      console.log("removed");
      //add few campgrounds
      data.forEach(function(seed){
       Campground.create(seed, function(err, campground){
        if(err){
          console.log(err)
        } else { 
          "added a campground";
          Comment.create(
            {
              text:"This place is Great!",
              author: "Homer"
            }, function(err, comment){
              
              if(err){
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("created comment!");
              }
            }
          )
          
        }
    })
  });
      
    }
  });
 
  //add few comments
  
};

module.exports = seedDB;