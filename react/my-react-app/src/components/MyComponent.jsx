/** React Hook:
 * - Special function that allows functional components to use React features without writing class components 
 * 
 * useState():
 *  - a react hook that allows the creation of a stateful variable and a setter function to update its value in the virtual dom
 * 
 *  onChange:
 *  - event handler used primarily with form elements
 *  ex. <input>, <textarea>, <select>, <radio>. 
 *  Triggers a function everytime the value of the input changes
 */
import React, {useState} from 'react'

function MyComponent(){
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    

    const updateName = () => {
        // name = "Spongebob";
        setName("Spongebob")
    }
    const incrementAge = () => {
        setAge(age + 1);

    }
    function handleNameChange(event){
        setName(event.target.value);
    }

    // ~~~ onchange event handlers for car object
    const [car, setCar] = useState({year: 2016, make: "Lexus", model: "LC500"});
    function handleYearChange(event){
        setCar(car => ({...car, year: event.target.value}));
    }
    function handleMakeChange(event){
        setCar(car => ({...car, make: event.target.value}));
    }
    function handleModelChange(event){
        setCar(car => ({...car, model: event.target.value}));
    }
    
    // ~~~ updating the state of an array 
    const [foods, setFoods] = useState(['apple', 'banana', 'orange']);
    function handleAddFood(){
        const newFood = document.querySelector('#food-input').value;
        setFoods(f => ([...f, newFood]));
        document.querySelector('#food-input').value = "";
    }
    function handleRemoveFood(){

    }

    return(
        <div>
            <h3>My Component Element</h3>
            <div className="for-name-age ">
                <p>Name: { name }</p>
                <button onClick={ updateName }>Set Name</button>

                <p>Age: { age }</p>
                <button onClick={ incrementAge }> Increment Age</button>

                <input value={name} onChange={handleNameChange} />
            </div>
            {/* car object */}
            <div className="for-car-object ">
                <p>My favorite car: {car.year} {car.make} {car.model}</p>

                <input type="number" value={car.year} onChange={handleYearChange}/>
                <input type="text" value={car.make} onChange={handleMakeChange}/>
                <input type="text" value={car.model} onChange={handleModelChange}/>
            </div>
        </div>
    );
}

export default MyComponent