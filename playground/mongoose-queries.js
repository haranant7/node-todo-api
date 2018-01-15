const {mongoose} =  require('./../server/db/mongoose');
const {Todo} =  require('./../server/models/todo');
const {User} =  require('./../server/models/user');

// var id = '5a5c309fd98f993c838868d2';
//
// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo',todo);
// });
//
// Todo.findById(id).then((todo)=>{
//     console.log('Todoby id',todo);
// });


var id = '5a51b205f25a0df446a7e50c';

User.findById(id).then((user)=>{
    if(!user){
        console.log('Unable to find user');
    }
    console.log('User id',JSON.stringify(user,undefined,2));
},(e)=>{
    console.log(e);
});
