// const MongoClient = require('mongodb').MongoClient;
//ES6 Object Destructuring Feature

var {MongoClient, ObjectID} = require('mongodb');

// To insert _id into document we can specify by ourself also.
var obj = new ObjectID();
console.log('ObjectID:',obj);

MongoClient.connect(
    'mongodb://localhost:27017/TodoApp',
    {useNewUrlParser: true},
    (err, client) => {
    if(err) {
        return console.log('Unable to coonect with MongoDB server');
    }
    console.log('Connected To MongoDB server');

    // Database instance.
    const db = client.db('TodoApp');
    
    // Create one new Collection Todos and Insert one single record
    // db.collection('Todos').insertOne({
    //     Text:'Something to do',
    //     completed: false
    // },(err, result) => {
    //     if(err){
    //         console.log('Unable to insert document into Todos Collection', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Create one new Collection Users and Insert one single record
    db.collection('Users').insertOne({
        _id: obj,
        name: 'Vang',
        age: 15,
        location: 'Orlando'
    },(err, result) => {
        if(err){
            console.log('Unable to insert document into Todos Collection', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log('TimeStamp from _id:',result.ops[0]._id.getTimestamp());
    });

    // Due to mongodb npm library V3 its deprecated.
    //db.close();   
    client.close();
});