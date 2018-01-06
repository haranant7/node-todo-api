//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    // db.collection('Todos').deleteMany({
    //     text: 'Something to do again'
    // }).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log('Unable to fetch',err);
    // });

    // db.collection('Todos').deleteOne({
    //     text: 'walk the dog'
    // }).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log('Unable to fetch',err);
    // });

    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log('Unable to fetch',err);
    // });

    // db.collection('Users').deleteMany({
    //     name: 'Bruce Wayne'
    // }).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log('Unable to fetch',err);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a50e2fd1668db481c9d4301')
    }).then((result)=>{
        console.log(result);
    },(err)=>{
        console.log('Unable to fetch',err);
    });

    //db.close();

});
