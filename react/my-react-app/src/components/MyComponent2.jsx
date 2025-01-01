/** Update array of objects in state
 * 
 */
import React, {useState} from "react";

function MyComponent2(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCars(c => [...c, newCar]);

        // clear input elements
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index){
        setCars(c => c.filter((element, i) => i !== index ));
    }
    function handleYearChange(event){
        setCarYear(event.target.value);
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }
    function handleModelChange(event){
        setCarModel(event.target.value);
    }


    return(
        <div className="">
            <h2>list of car objects</h2>
            <ul>
                {cars.map((c, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{c.year} {c.make} {c.model}</li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange}/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make" />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Make" />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default MyComponent2