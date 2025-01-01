
function Button() {
    const handleClick = () => console.log("Ouch");
    const handleClick2 = (name) => console.log(name, "Stop clicking me");

    return(
        <button className="btn" onClick={ () => handleClick2("Ray") }>Click Me</button>
    );
}

export default Button