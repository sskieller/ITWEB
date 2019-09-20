const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/mongo-mongoose-db';
const Schema = mongoose.Schema;

mongoose.connect(dbURI);

mongoose.model('BlogPostSchema', schema1);
const BPS = mongoose.model('BlogPostSchema');
BPS.create({
    author: requestAnimationFrame.body.name,
})

const schema1 = new Schema({
    test: String // test is a path of type String
});


// Define a schema
const BlogPostSchema = new Schema({
    author: Schema.ObjectId,
    title: String,
    body: String,
    date: Date,
    tags: [String]
});