// Date methods and formats
    // Date Get Methods
    // get the current date based on browser 
    let d = new Date();
    console.log(d);

    // get the date in string form
    console.log(d.toString());
    // get the date in string form without the time
    console.log(d.toDateString());

    // get the year only
    console.log("Year: ", d.getFullYear());

    // get the month only
    console.log("Month: ", d.getMonth());// will return a number
    // to return the month as a string, must use array
    var monthN = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    console.log("Month in string: ", monthN[d.getMonth()]);

    // get the day
    console.log("Day: ", d.getDate());

    // get the hour
    console.log("Hour: ", d.getHours());

    // get the minutes
    console.log("Minute: ", d.getMinutes());

    // get the seconds
    console.log("Second: ", d.getSeconds());