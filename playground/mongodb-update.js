//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a49f771340e6821c4304b73')
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal : false
    // }).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log('Unable to fetch',err);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a50ec784f24da3ef8313ef8')
    },{
        $set:{
            name:'Master Wayne'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal : false
    }).then((result)=>{
        console.log(result);
    },(err)=>{
        console.log('Unable to fetch',err);
    });

    //db.close();

});
