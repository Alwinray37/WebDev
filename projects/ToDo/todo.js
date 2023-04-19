

// let input = prompt("What would you like to do");
// const todo = ['your mom', 'your gf', 'your dog'];
// while(input !== "quit" && input !== "q"){
//     if(input == "list"){
//         console.log("**********");
//         for(let i = 0; i < todo.length; i++){
//             console.log(`${i}: ${todo[i]}`);
//         }
//     }
//     else if(input == "new"){
//         const newTodo = prompt("What is the new to-do?");
//         todo.push(newTodo);
//         console.log(newTodo);
//     }
//     else if(input == "delete"){
//         const index = [prompt("delete which index?")];
//         const deleted = todo.splice(index, 1);
//         console.log(`Deleted ${deleted[0]}`)
//     }
//     input = prompt("What would you like to do");
// }
// alert("Goodbye!");

let addTask = document.getElementById('add-task');
let taskContainer = document.getElementById('task-container');
let inputField = document.getElementById('inputField');

// function to add task to task-container from inputField
let newTaskFunction = () => {
    if(!inputField.value == ""){var p = document.createElement('p');
    p.innerText = inputField.value;
    p.classList.add('task-p-style');
    taskContainer.appendChild(p);
    inputField.value = ""; // resets the inputValue field

    p.addEventListener('click', ()=>{
        p.style.textDecoration = "line-through";
    })
    p.addEventListener('dblclick', ()=>{
        taskContainer.removeChild(p);
    })
}
}
addTask.addEventListener('click', newTaskFunction);
inputField.addEventListener('keypress', (event)=>{
    if (event.key === "Enter") { 
        event.preventDefault();
        document.getElementById('add-task').click();
    }
});