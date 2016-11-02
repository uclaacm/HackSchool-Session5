//imports are done for you
const list = require('./list');
const express = require('express');
const bodyParser = require('body-parser');





//TODO: implement express app
//use express.static
//user body-parser
//set view engine to handlebars




//TODO: GET /
//redirect to create-list.html





//TODO: POST /create
//get listName parameter from req.body
//call list.setName()
//redirect to /list





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