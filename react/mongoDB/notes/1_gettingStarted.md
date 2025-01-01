# MongoDB  
## Installing Mongo DB via homebrew
in your terminal, type  
`brew tap mongod/brew`
`brew update`


## Creating a database
just type "use {databaseName}". Like so:  
`use students`
> if a database does not exist, it will be created

## Create a collection and insert an object
when youre in a database, create a collection type "db.{collectionName}.insertOne({object})"
`db.boys.insertOne({name: "John Doe"})`
> if a collection does not exist, it will be created

To insert multiple objects, use either: 
`db.collectionName.insertMany({object}, {object})`
`db.collectionNAme.insert({object}, {object}) //commonly used`
> objects are key value pairs. `{name: 'john', age: 20, passing: false}`

## Show objects in collection in database
within the database, use ".find()" method
`db.boys.find()`

