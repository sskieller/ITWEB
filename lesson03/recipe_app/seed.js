'use strict'

const mongoose = require('mongoose'),
    Subscriber = require('./models/subscriber');

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    { useNewUrlParser:true}
);

mongoose.connection;

var contacts = [
    {
        name: "søren hansen",
        email: "sorenhansen@gmail.com",
        zipCode: 1393
    },
    {
        name: "bob jsensen",
        email: "bobsje@hotmail.com",
        zipCode: 3984
    },
    {
        name: "jill gade",
        email: "gj@lol.com",
        zipCode: 8000
    }
];

Subscriber.deleteMany()
    .exec()
    .then( () => {
        console.log("Subscriber data is empty!");
    });

var commands = [];

contacts.forEach( (contact) => {
    commands.push(Subscriber.create({
        name: contact.name,
        email: contact.email,
        zipCode: contact.zipCode
    }));
});

Promise.all(commands)
    .then( r => {
        console.log(JSON.stringify(r));
        mongoose.connection.close();
    })
    .catch( (error) => {
        console.log(`ERROR: ${error}`);
    });
    