# GET vs POST 
GET and POST are two commonly used HTTP methods for client-server communication. They have distinct purpose and characteristics. 

### GET method
- Purpose: to retrieve data from the server
- Idempotency: multiple identical requests should have the same effect as a single request. 
- Cacheability: can be cached by browsers and intermediate proxies
- Parameters: parameters are sent in the URL query string
- Data size: limited maximum URL length (about 2048 characters in most browsers)
- Visibility: parameters are visible in the UTL , making GET less secure for sensitive data

### POST method
- Purpose Submit data to the server to create or update resources. 
- Idempotency: POST requests are not idempotent, meaning multiple identical requests can have different effects.
- Cacheability: POST requests are not cached by default.
- Data size: can handle large amounts of data
- Visibility: Parameters are not visible in the URL , making POSt more secure for sensitive data

```js
app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Data received: ${JSON.stringify(data)}`);
});
```

## When to use GET vs POST
Use GET when:
- retrieving data without making any changes on the server
- you need to cache the response for performance reasons
- you want to bookmark or share the URL with the parameteres included

Use POST when: 
- submitting form data that changes the state of the server.
- sending large amounts of data or binary data (like files)
- the data being sent is sensitive and should not be visible in the URL