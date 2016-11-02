//imports are done for you
const list = require('./list');
const express = require('express');
const bodyParser = require('body-parser');





//TODO: implement express app
//use express.static
//user body-parser
//set view engine to handlebars
let app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded());





//TODO: GET /
//redirect to create-list.html
app.get('/', function(req, res) {
	res.redirect("/create-list.html");
});





//TODO: POST /create
//get listName parameter from req.body
//call list.setName()
//redirect to /list
app.post('/create', function(req, res) {
	list.setName(req.body.listName);
	res.redirect('/list');
});





//TODO: GET /list
//render 'list.hbs', passing list.get() object





//TODO: POST /add
//get listItem parameter from req.body
//call list.addItem()
//redirect to /list





//TODO: GET /delete/:id
//get id from req.params
//call list.removeItem()
//redirect to /list





//TODO: put app.listen here
app.listen(3000);
console.log("Listening on port 3000...");