// Destructuring Objects
// syntax: 
    // let {<key>} = objectName; for storing in variables with same name as the key
    // let {<key>: variableName} = objectName; for storing in variables different than key name
// 
    // consider the following
    const user = {
        email: 'user@email.com',
        password: 'pass123',
        firstName: 'Harvey',
        lastName: 'Specter',
        born: 1990,
        deceased: false,
        bio: 'Harvey Specter is a renowned corporate attorney in New York City.',
        city: 'Manhattan',
        state: 'New York'
    };

    // how we normally would copy a key value and save into a variable
    let firstName = user.firstName;
    let lastName = user.lastName;
    console.log(firstName, lastName);
    //> Harvey Specter

    // with objects containing multiple key pairs, this can get very tedious 
    // use destructure; basically revert the positions of the operands of the '=' 
    let {password, email} = user; 
    // is equivalent to  
        // let email = user.email;
        // let password = user.password;
    console.log(password, email);

    // exctracting key-values and storing them in a different variable name than its key
    let {born: birthYear} = user; 
        //same as let birthYear = born.user;
    console.log(born, birthYear);
    // youll get an error saying born is not defined. 

    //continue
    let {deceased: isDead, bio: summary, city: residesIn} = user;
    console.log(isDead, summary, residesIn);
    // these are now the variable that store the respective key-values; deceased, bio, and city
//