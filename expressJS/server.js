// import the express module to create a web app using node.js
const express = require('express');
// initialize an express app using variable app = express()
const app = express();

// require fileSystem module
const fs = require('fs');


// Define routes and middleware to handle requests 
/** Syntax: app.anyMethod('path', function) 
 * the callback function receives req (request) abd res (response) objects provided by Express
 * req is the incoming request object containing client data
 * res is the response object used to send data back to the client 
 * use res.status() to set the HTTP status code beofre sending the response
 * use res.send() to send the response back to the client. you can send string, obj, array, or buffer. other methods include res.json() for JSON objects and res.sendFile() files
*/ 
// app.use((req, res)=>{
//     console.log("New Request");
// });

// root route
app.get('/', (req, res) =>{
    res.send('<h1>HomePage</h1>');
});

// about
app.get('/about', (req, res) => {
    fs.readFile('./public/about.html', 'utf-8', (err, html) => {
        if(err){
            res.status(400).send('Page not found');
            console.log("error")
        }else{
            res.send(html);
        }
    })
});

// path params
app.get('/r', (req, res) => {
    res.send('Browsing R');
});
app.get('/r/:subreddit', (req, res) => {
    const {  subreddit } = req.params;
    res.send(`Browsing ${subreddit}`); 
});
app.get('/r/:subreddit/:sortBy', (req, res) => {
    const { subreddit, sortBy} = req.params;
    console.log(req.params);  
});

// query string
app.get('/search', (req, res) => {
    console.log(req.query);
    const { keyword, sortBy } = req.query;
    res.send(`Searching: ${keyword}, Sort By: ${sortBy}`);
});

// get vs post
app.use(express.urlencoded({ extended: true }));// need this for access req.body
app.use(express.json()); // for parsing application/json

app.get('/tacos', (req, res) => {
    res.send('GET tacos response');
});
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`POST tacos response: \n Meat: ${meat}, Quantity: ${qty}`);
});

// CRUD
// UUID
const { v4: uuid } = require('uuid');
uuid(); // use this instead of hardcoding id's in objevts 
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lool so funny', 
    },
    {
        id: uuid(),
        username: 'Tim',
        comment: 'volleyball is lyfe', 
    },
    {
        id: uuid(),
        username: 'Tony',
        comment: 'Cant start your day without a cup of coffee', 
    }
];
app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
});
app.get('/comments/new', (req, res) => {
   res.render('comments/new');
});
app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({ username, comment, id: uuid() });
    // res.send("Form submitted");
    res.redirect('/comments');
});
app.get('/comments/:id', (req, res) =>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.body.comment);
    const comment = comments.find(c => c.id === id);
    res.send("All good");
});

// Edit/Update
app.get('/comments/:id/edit', (req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});






// Specify a port for the server to listen on
const PORT = process.env.PORT || 3000;
app.listen(PORT, err =>{
    if(!err){
        console.log(`Server running on port: ${PORT}`);
    }else{
        console.log('Error occured, server cannot start.', err);
    }
});



