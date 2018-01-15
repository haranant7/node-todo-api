//const MongoClient = require('mongodb').MongoClient;

const {ObjectID} = require('mongodb');

const {mongoose} =  require('./../server/db/mongoose');
const {Todo} =  require('./../server/models/todo');
const {User} =  require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove()

Todo.findByIdAndRemove('5a5c600e24d090538cebcb5d').then((todo)=>{
    console.log(todo);
})
