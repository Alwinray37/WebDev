# Request and Response Objects

### Request (req)
The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and more.

Key properties and methods include:
- `req.query`: contains the URL query parameters
- `req.params`: contains route parameters (in the path portion of the URL)
- `req.body`: contains data sent in the request body (used with POST, PUT, PATCH requests)
- `req.method`: the HTTP method (e.g. GET, POST, DELETE)
- `req.url`: the URL of the request
- `req.headers`: contains the headers sent by the client
- `req.cookies`: contains cookies sent by the client (if the cooke-parser middleware is used)

```js
app.get('/user/:id', (req, res) => {
    console.log(req.params.id); // Access route parameter
    console.log(req.query.name); // Access query parameter
});
```

### Response (res)
The response object represents the HTTP response that an express app send when it gets an HTTP request.

Key properties and methods include:  
- `res.status(code)`: Sets the HTTP status for the response.
- `res.send(body)`: Sends a response body.
- `res.json(obj)`: Sends a JSON response.
- `res.sendFile(path)`: Sends a file as an octet stream.
- `res.redirect([status,] path)`: Redirects to a URL.
- `res.set(field, [value])`: Sets the response’s HTTP header field.
- `res.cookie(name, value, [options])`: Sets a cookie.

```js
app.get('/user/:id', (req, res) => {
    res.status(200).json({ id: req.params.id, name: req.query.name });
});
```

### Putting it all together
```js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    // Accessing route parameters and query parameter
    const userID = req.params.id;
    const userName = req.query.name;

    // Sending JSON response
    res.status(200).json({ id: userId, name: userName });
});

app.post('/user', (req, res) => {
    // Accessing data in the request body
    const newUser = req.body;

    // Sending response
    res.status(201).json({ message: 'User created', user: newUser });
});

app.listen(port, () => {
    console.log('Server is running on port: ', port);
});
```

### Middleware
in Express, middleware functions are functions that have access that have access to the request object ('req'), the response object ('res'), and the next middleware function in the application's request-response cycle. Middleware can execute code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function.

Example of middleware:
```js
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);
```

### Summary
- Request (req): contains information about the HTTP request
- Response (res): Allows you to send back the desired HTTP response.
- Middleware: Functions that have accessed to the request and response objects and can moduify them or end the request-response cycle.
