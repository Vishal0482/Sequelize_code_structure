const createError = require("http-errors");
const express = require("express");

const bodyParser = require("body-parser");


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var models = require("./models");
const { application } = require("express");

models.sequelize.sync().then(function(){
    console.log("bhai bhai bhai databse hale che")
}).catch(function(err){
    console.log("are! bhai bhai bhai error ai");
})

require("./routes")(app);
app.get("*", (req, res) => res.status(200).send({
    message: "welcome to the begining of nothingness"
}))


app.listen(3000, ()=>{
    console.log("server is on")
})

module.exports = app;