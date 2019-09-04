'use strict'

const port = 3000,
    express = require('express'),
    app = express(),
    homeController = require('./controllers/homeController');

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

app.get("/items/:vegetable", homeController.sendVegetable);

app.get("/", homeController.homePage);

app.set("port", process.env.port || port);
app.listen(app.get("port"), (res) => {
    console.log(`Server running on port: ${app.get("port")}`);
});