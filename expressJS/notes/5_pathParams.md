# Path Parameters
Path parameters, aka route parameters, are used to capture values specified at a certain position in the URL path. These parameters are defined by placing a colon before the parameter name in the route definition. 

### Defining Path Parameters
To define a path parameter, simply add `:parameterName` in the route path.
```js
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send('User ID:', userId);
});
```
