'use strict'

const port = 3000,
    express = require('express'),
    app = express(),
    homeController = require('./controllers/homeController'),
    layouts = require('express-ejs-layouts');

// Using express templates
app.set("view engine", "ejs");
app.get("view engine");
// Using express layouts
app.use(layouts);


app.use(
    express.urlencoded({
        extended:false
    })
);
app.use(express.json());

app.use((req,res,next)=>{
    console.log(`request made to: ${req.url}`);
    next();
});

app.post("/", (req,res) =>{
    console.log(req.body);
    console.log(req.query);
});
// index.ejs allows setting variables in html. Also sends this back with request to /name
// This function returns a rendering of a view. In this case the index.ejs view. 
respondWithName: app.get("/name/:myName", homeController.respondWithName);

app.get("/items/:vegetable", homeController.sendVegetable);


// Setting up server dynamically for either the environment port or port 3000
app.set("port", process.env.port || port);
app.listen(app.get("port"), (res) => {
    console.log(`Server running on port: ${app.get("port")}`);
});