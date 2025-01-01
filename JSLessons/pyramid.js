// create a pyramid given the number of rows and character
/**
 *   #
 *  ###
 * #####
 * the rlationship of the rows to the number of characters:
 *  - add two characters each row iteration
 *  - the padding is half of the difference of the total characters in the last row 
 */

const character = "#";
const rows = 5;

// function to create the pyramid
function createPyramid(character, rows, inverted){
    if(inverted == true){
        for(let i = rows; i >= 1; i--){
            // create the padding
            // padding is the number of rows minus the current row iteration
            let spaces = " ".repeat(rows - i);
    
            // create the number of chars per row
            // the number of chars is 1 less than double the current row:
            // (eg. row 2 will have 3 characters )
            let numChar = character.repeat(2 * i - 1);
    
            //output the pyramid 
            console.log(spaces + numChar + spaces);
        }
    }else{
        for(let i = 1; i <= rows; i++){
            // create the padding
            // padding is the number of rows minus the current row iteration
            let spaces = " ".repeat(rows - i);
    
            // create the number of chars per row
            // the number of chars is 1 less than double the current row:
            // (eg. row 2 will have 3 characters )
            let numChar = character.repeat(2 * i - 1);
    
            //output the pyramid 
            console.log(spaces + numChar + spaces);
        }
    }
    
}

createPyramid(character, rows, true);