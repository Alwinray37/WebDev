// Destructuring within the parameter section of the function
// if your function is expecting an array or object specifically, you can destructure in the parameters () section 

    //consider the following 
    const user = {
        email: 'user@email.com',
        password: 'pass123',
        firstName: 'Harvey',
        lastName: 'Specter',
        born: 1990,
        deceased: false,
        bio: 'Harvey Specter is a renowned corporate attorney in Ney York City.',
        city: 'Manhattan',
        state: 'New York'
    }
    
    // normal way
    function fullName(user){
        return `${user.firstName} ${user.lastName}`;
    }
    
    // destructuring normally
    function fullname(user){
        let {firstName: fname, lastName: lname} = user;
        return `${fname} ${lname}`;
    }
    console.log(fullname(user));
    
    // destructuring within the params ()
    // if function is expecting an object already, you can destructure in the parameter section
    function full({firstName: fname, lastName: lname}){
        return `${fname} ${lname}`;
    }
    console.log(full(user));
    //> Harvey Specter 