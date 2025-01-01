# Hello World example

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("HelloWorld");
});

app.listen(port, () => {
    console.log((`App listening on port ${port}`))
});
```
```terminal 
$ nodemon app.js
```
> use nodemon to auto restart
- Import the express module using require() 
- use the express module by saving it to app variable
- initialize the port
- set the root '/' page using app.get()
- using app.listen, run the app