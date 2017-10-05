const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;


var app = express();
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

// middleware
app.use((req, res, next) =>{
    var now = new Date().toString();

    console.log(`${now}:`);
    next();

});

// maintenancemode

app.use((req,res, next)=>{
    res.render('maintenance.hbs'); 
    next();
});

app.use(express.static(__dirname + '/public'));


// home page
app.get('/', (req, res)=>{
    res.render('home.hbs', {
        pageTitle:'Home',
        welcomeMsg:'Welcome to the Home Page who ever you are !',
        currentYear: new Date().getFullYear()
    });
});


// about page
app.get('/about', (req, res) =>{
    res.render('about.hbs',{
        pageTitle:'About',
        currentYear: new Date().getFullYear()
    });
});




// server port
app.listen(port, ()=>{
    console.log(`Server is Up on port ${port}`);

});
