const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//list of items added by user
let items = [];
app.set('view engine', 'ejs');

// bodyParser use
app.use(bodyParser.urlencoded({
    extended: true
}));
// static files
app.use(express.static(__dirname + '/public'));

// get
app.get("/", function(req, res) {

  let today = new Date();
  let options = {
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day , newListItems: items
  });
});

// post
app.post("/", function(req, res){
  //save 'item' form data
let item = req.body.newItem;
 //push 'item' data to 'items' array
items.push(item);
 //reload to root
res.redirect("/");
});







app.listen(3000, function() {
  console.log("server is running on port 3000");
  console.log(Date());
});
