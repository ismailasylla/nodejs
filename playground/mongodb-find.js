const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
   if (err){
       return console.log('unable to connect to mongoDB server');
   }
   console.log('connected to  mongodb server..!');

//    db.collection('Todos').find({
//        _id: new ObjectID('59d75022e8b8842d17581f04')
//     }).toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined,2));

//    },(err)=>{
//        console.log('Unable to fetch data !', err);
//    });

// db.collection('Todos').find({
//     _id: new ObjectID('59d75022e8b8842d17581f04')
//  }).toArray().then((docs)=>{
//  console.log('Todos');
//  console.log(JSON.stringify(docs, undefined,2));

// },(err)=>{
//     console.log('Unable to fetch data !', err);
// });
  


db.collection('users').find({name:'ibrahima sylla'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined,2));
},(err) =>{
console.log('Unable to fetch data !', err);


});

});


