# C.R.U.D. Operations in Mongo
## Create
Create a database  
`use databaseName` 

Create a collection  
`db.collectionName.insert({key: 'value'})`
> if a database, collection, or object key does not already exist, it will be created 

Create documents  
Use the `.insert()` operator and pass in an object or an array of objects
`db.collectionName.insert( [ {key1: 'val1'}, {key2: 'val2'} ] )`

## Read 
To retrieve all the objects currently in a collection;  
`db.collectionName.find()`

Show a filtered list, or specific object with certain key-pair values, pass a key-value pair in .find() as an argument  
`db.collectionName.find({key: 'value'})`

## Update
Update operations modify existing documents in a collection.  
Methods to update documents of a collection:
- `db.collectionName.updateOne()`
- `db.collectionName.updateMany()`
- `db.collectionName.replaceOne()`

Use `$set` operator:    
``` 
db.collectionName.updateOne(
    {key: 'value'},                     // update filter
    { $set: {someKey: 'someValue} }     // update action
)
```

## Delete 
Delete operations remove documents from a collection.  
Methods to delete docs of a collection:
- `db.collectionName.deleteOne()`
- `db.collectionName.deleteMany()`

Syntax: 
```
db.collectionName.deleteMany(
    { key: 'value' }            // delete filter
)
```
> to delete everything within a collection: `db.collectionName.deleteMany({})`