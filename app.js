
var express = require('express');
var handlebars = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// Set Static Files
app.use('/assets', express.static(path.join(__dirname + '/public')));

// Set view engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




const todos = [
    "Wash the car",
    "Live life to the fullest",
    "Be patient",
    "Shop for Groceries"
];



// Routes
app.get('/', function(req,res){
    console.log(todos);
    res.render('home', {todos: todos});
});

app.post('/', function(req,res){
    console.log(req.body.todo);
    todos.push(req.body.todo);
    res.redirect('/');
});


// Listen on Port 3000
app.listen(3000, function(){
    console.log('listening on port 3000');
});