const express = require('express');
const path = require('path');
const favicon = require('express-favicon');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'russellwellsonline/build')));
app.use(favicon(__dirname + 'russellwellsonline/build/favicon.ico'));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});
//my endpoints
app.get('/portfolio', (req,res) => {
    console.log('portfolio')
});
app.get('/more', (req,res) => {
    console.log('more')
});
app.get('/resume', (req,res) => {
    console.log('resume')
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/russellwellsonline/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);