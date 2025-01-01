 # Process and Argv
 ## Process
 the process object is a global object that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using `require()`. It can also be explicitly accessed using `require()`:  
```js
const process = require('process');
```

## process.argv
The `process.argv` property returns an array containing the command line arguments passed when the node.js process was launched. 

The first two elements of the args array will always be the executable file, and the second is the file directory.
```js
const args = process.argv;
console.log(args);
```

```terminal
$ node app.js cats puppies apples
```
```
args: [
  '/Users/rayroble/.nvm/versions/node/v16.16.0/bin/node',
  '/Users/rayroble/REPOS/WebDev/expressJS/server',
  'cats',
  'puppies',
  'apples'
]
```

