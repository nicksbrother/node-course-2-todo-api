//use object desrut
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //insert record
    //db.collection('Users').insertOne({
    //    name: 'Mark Sarich',
    //    age: 38,
    //    location: "Chicago"
    //}, (err, result) => {

    //    if (err) {
    //        return console.log('Unable to insert', err);
    //    }

    //    console.log(JSON.stringify(result.ops, undefined, 2));

    //    console.log(result.ops[0]._id.getTimestamp());

    //});


    //select records
    db.collection('Todos').find({ _id: new ObjectID('5ae9d0334d407b3398f53e33') }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) => {
        console.log('Unable to print todos');
    });

    // client.close();

});