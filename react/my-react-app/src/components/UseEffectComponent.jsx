/** useEffect():
 * - is a react hook that tells react DO DOME CODE WHEN :
 *      - this compnent re-renders
 *      - this compnent mounts
 *      - the state of a value
 * 
 * useEffect(function, [dependencies])
 * 
 * 1. useEffect(() => {})   // runs after every re-render
 * 2. useEffect(() => {}, [])   // runs only on mount
 * 1. useEffect(() => {}, [value])   // runs on mount + when the value changes
 * 
 * USES:
 * 1. event listeners
 * 2. DOM Manipulation
 * 3. subscriptions (real-time updates)
 * 4. fetching data from an API
 * 5. clean up when a component unmounts
 */
import React, {useState, useEffect} from "react";
    

function UseEffectComponent(){
    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {   
        document.title = `My Counter: ${count}`;
    }, [count]);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('Resize event listener added');
    }, []);

    function addCount(){
        setCount(c => c + 1);
    }

    return (
        <div className="use-effect-comp">
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <p>Window Width: {width}</p>
            <p>Window height: {height}</p>
        </div>
    );
}

export default UseEffectComponent