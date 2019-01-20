
const express = require("express");
const path = require("path");

const app = express();



//Staatliches
app.use(express.static("css"));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));


app.get("/", function(req,res) {

  res.sendFile(__dirname + "/index.html");
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
