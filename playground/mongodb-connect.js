const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true},
(err, db) => {
    if(err) {
        return console.log('Unable to coonect with MongoDB server');
    }
    console.log('connected to MongoDB server');

    db.close();
});