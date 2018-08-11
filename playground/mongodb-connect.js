const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true},
(err, client) => {
    if(err) {
        return console.log('Unable to coonect with MongoDB server');
    }
    console.log('Connected To MongoDB server');

    // Database instance.
    const db = client.db('TodoApp');
    
    //Create one new Collection Todos and Insert one single record
    db.collection('Todos').insertOne({
        Text:'Something to do',
        completed: false
    },(err, result) => {
        if(err){
            console.log('Unable to insert document into Todos Collection', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    //Create one new Collection Users and Insert one single record
    db.collection('Users').insertOne({
        name: 'Vish',
        age: 27,
        location: 'Tampa'
    },(err, result) => {
        if(err){
            console.log('Unable to insert document into Todos Collection', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    //db.close();   // Due to mongodb npm library V3 its deprecated.
    client.close();
});