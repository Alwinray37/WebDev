import React, {useState, useRef, useEffect} from "react";

function UseRefComponent(){
    let [number, setNumber] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log('Component rendered');
    });



    function handleClick(){
        ref.current++;
    }

    return(
        <div>
            <p>Number: {number}</p>
            <button onClick={handleClick}>+ 1</button>
            <input type="text" ref={inputRef} />
        </div>
    )
}

export default UseRefComponent