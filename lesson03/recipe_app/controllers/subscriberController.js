'use strict'

const Subscriber = require('../models/subscriber');

// Sets BL for subscriber list page (CALLBACK)
//exports.getAllSubscribers = (req,res,next) => {
//    Subscriber.find( {}, (error, subscribers) => {
//        if (error) next(error);
//        req.data = subscribers;
//        next();
//    });
//};

// BL for subscriber list page (PROMISE)
exports.getAllSubscribers = (req,res) => {
    // Find all subscribers
    Subscriber.find({})
    // Allows the query to return a promise
    .exec()

    .then( (subscribers) => {
        res.render("subscribers", {
            subscribers: subscribers
        });
    })
    .catch( (error) => {
        console.log(error.message);
        return [];
    })
    .then( () => {
        console.log("getAllSubscribers promise completed");
    });
}

exports.getSubscriptionPage = (req,res,next) => {
    res.render("contact");
};

// Sets BL for subscriber form
exports.saveSubscriber = (req,res) => {
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    });

    // PROMISE
    // If a parameter is missing, a spelling error in ejs file might have occurred
    newSubscriber.save()
    .then(result => {
        res.render("thanks")
    })
    .catch( (error) => {
        console.log(error);
    });

    // (CALLBACK)
    //newSubscriber.save( (error, result) => {
    //    if (error) res.send(error);
    //    console.log(`The result of subscriber save: ${result}`);
    //    res.render("thanks");
    //});
};