const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
   if (err){
       return console.log('unable to connect to mongoDB server');
   }
   console.log('connected to  mongodb server..!');

   //deleteMany 
// db.collection('users').deleteMany({name:'ismaila sylla'}).then((result)=>{
//     console.log(JSON.stringify(result,undefined,2));

// });


//    });

   //deleteOne
db.collection('users').findOneAndDelete({_id : new ObjectID("59d679e4e512fb2423f4beec")}).then((results)=>{

console.log(JSON.stringify(results, undefined,2));
});

// });

   //FindOneAndDelete


   //db.close();


});
