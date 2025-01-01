/** updating the state of an array
 * lets create a grocery list
 *  
 */
import React, {useState} from "react";

function Food(){
    const [foodList, setList] = useState(['apple', 'banana', 'orange']);

    function handleAddFood(){
        const newItem = document.querySelector('#food-input').value; 
        setList(fList => ([...fList, newItem]));
       
        // clear the input
        document.querySelector('#food-input').value = '';
    }
    function handleRemoveFood(index){
        setList(foodList.filter((_, i) => i !== index));
    }

    return(
        <div className="" id="grocery-list">
            <h3>Grocery List</h3>
            <ul>
                {foodList.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" placeholder="Enter Food Item" id="food-input" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default Food