 const MongoClient = require('mongodb').MongoClient;
 
 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if (err){
        return console.log('unable to connect to mongoDB server');
    }
    console.log('connected to  mongodb server..!');


    db.collection('Todos').insertOne({
        text:'Something to do',
        name:'ismaila',
        age:25,
        location:'india bangalore saladevanahally',
        country:'Bamako-Mali',
        completed:false

    },(err,result)=>{
        if(err){
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });


db.collection('users').insert({
    
        name:'ismaila sylla',
        location:'bangalore-india',
}, (err,result)=>{

    if (err){

        console.log('insertion failed', err)
    }

    console.log(result.ops);
})


    db.close();
 });
