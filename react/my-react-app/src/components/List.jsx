
function List(){
    const fruits = [
        {id: 1, name: "apple", calories: 50},
        {id: 2, name: "orange", calories: 90},
        {id: 3, name: "banana", calories: 150},
    ];
    const listItems = fruits.map(fruit => 
        <li key={fruit.id}>{fruit.name}: {fruit.calories}</li>
    );

    return(<ol>{ listItems }</ol>);
}

export default List