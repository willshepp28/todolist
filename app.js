
var express = require('express');
var handlebars = require('express-handlebars');

var path = require('path');
var bodyParser = require('body-parser');
const models = require('./models');

var app = express();

// Set Static Files
app.use('/assets', express.static(path.join(__dirname + '/public')));

// Set view engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var completed = [];



// Routes
app.get('/', async function (req, res) {

    var todosFalse = await models.Todos.findAll({
        where: {
            completed: false
        }
    });


    var todosTrue = await models.Todos.findAll({
        where: {
            completed: true
        }
    });

    res.render('home', { todosFalse, todosTrue });
});



app.post('/', function (req, res) {
    var name = req.body.todo;

    var addTodo = models.Todos.create({
        name: name,
    }).then(newTodo => {
        console.log(`New todo ${newTodo.name}, with id ${newTodo.id} has been created.`);
        res.redirect('/');
    });

});

app.post('/edit/:id', function (req, res) {
    var id = req.params.id;

    console.log(req.body.edit);
    var updateTodo = models.Todos.update(
        { name: req.body.edit },
        {
            where: { id: id }

        }).then(function (todo) {
            // Code here.
            // Do something after updating instance.
            console.log("You've updated " + todo);
            res.redirect('/')
        })
});

// delete data
app.post('/completed/:id', function (req, res) {
    var id = req.params.id;

    // var deleteTodo = models.Todos.destroy({
    //     where: {
    //         id: id
    //     }
    // }).then(function (todo) {
    //     // Code here.
    //     // Do something after destroying instance

    //     console.log("You've deleted " + todo);
    //     res.redirect('/');
    // });


    var updateTodo = models.Todos.update(
        { completed: true },
        {
            where: { id: id }

        }).then(function (todo) {
            console.log(todo);
            // Code here.
            // Do something after updating instance.
            console.log("You've completed your todo " + todo);
            res.redirect('/')
        })
});


// Listen on Port 3000
app.listen(3000, function () {
    console.log('listening on port 3000');
});