const express = require('express');
// var mongoose = require('mongoose');
const connectDB = require('./config/db');
var cors = require('cors');

const menus = require('./routes/api/menus');
const app = express();

// set port
const port = 3000;
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Welcome to example page using angular'));

// use route 
app.use('/api/menus', menus);

//link to another page
// app.get('/menu', function (req, res) {
//     res.send('menu page');
//  });



 // startup our app at http://localhost:3000
app.listen(port, () => console.log(`App listening on port ${port}!`));