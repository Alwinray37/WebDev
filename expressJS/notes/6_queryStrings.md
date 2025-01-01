# Working with Query Strings
Query strings are parts of the URL that are used to pass additional parameters and data to the server. Query strings follow the `?` character in the URL and are composed of key value pairs separated by `&`.

### Accessing Query Strings
Access query string parameters in express using the `req.query` object. This object contains a property for each query string parameter, with the property nae corresponding to the parameter name and the property value corresponding to the parameter value. 

```js
app.get('/search', (req, res) => {
    // Accessing query string parameters from req.query
    const keyword = req.query.keyword;
    const sortBy = req.query.sortBy;

    // Sending a response with the extracted query string parameters
    res.send(`Keyword: ${keyword}, Sort By: ${sortBy}`);
});
``` 
In this example:
- The route `/search` is defined to handle GET requests
- When a request matches this route and includes query string parameter, express makes them available in the `req.query` object.

This is an example of a URL with query strings: 
`/search?keyword=dogs&sortBy=new`

The `req.query` object will look like this: 
```js
{ keyword: 'dogs', sortBy: 'new'}   
```