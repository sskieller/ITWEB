const MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Connection url
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'hello-mongo-db';

// Create a new MongoClient
const client = new MongoClient(url, {useNewUrlParser:true});

// Use connect method to connect to the server
client.connect(err => {
    assert.equal(null, err);
    console.log("Database connected succesfully to server");

    const db = client.db(dbName);

    try {
        insertDocuments(db, () => {
            updateDocument(db, () => {
                findDocuments(db, () => {
                });
            });
        });
    
        insertDocuments(db, () => {

            indexCollection(db, () => {
                client.close();
            });
        });    
    } catch (error) {
        console.log(error);
    } finally {
        
    }
});

const insertDocuments = async (db, callback) => {
    // Get documents collection
    const collection = db.collection('documents');
    // Insert documents
    await collection.insertMany([
        {a:1},{a:2},{a:3}
    ], (err, result) => {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection")
        callback(result);
    });
}

const findDocuments = async (db, callback) => {
    // Get documents collection
    const collection = db.collection('documents');
    // Find documents
    await collection.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
    });
}

const updateDocument = async (db, callback) => {
    // Get documents collection
    const collection = db.collection('documents');
    // Update document: where a is 2, set b = 1
    await collection.updateOne({a:2},
        {$set: {b:1} }, (err, result) => {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated the document with the field 'a'=2");
            callback(result);
        });
}

const removeDocument = async (db, callback) => {
    // Get documents
    const collection = db.collection('documents');
    // Delete document where a is 3
    await collection.deleteOne({a : 3}, (err, result) => {
        assert.equal(err,null);
        assert.equal(1,result.result.n);
        console.log("Removed the document with the field a equal to 3");
        callback(result);
    });
}

const indexCollection = async (db, callback) => {
    await db.collection('documents').createIndex(
        {"a":1},
        null,
        (err, results) => {
            console.log(results);
            callback();
        }
    );
}