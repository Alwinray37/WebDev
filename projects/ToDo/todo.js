// const taskLibrary = [];
const addTaskContainer = document.querySelector('#addTask');
const taskContainer = document.querySelector('#task-container');
const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const clearBtn = document.querySelector("#clearTasks");
const compContainer = document.querySelector("#completed-container");

function setClasses(){
    addTaskContainer.setAttribute('class', `
        container       
        d-flex
        justify-content-between
        align-items-center
        p-3
        text-white
    `);
    taskContainer.setAttribute('class', `
        container
        d-flex
        flex-column
        justify-content-center
        text-white
        p-3
    `);
    taskInput.classList.add(
        "p-2"
    );
    compContainer.setAttribute('class',
        `container
        d-flex
        justify-content-start
        align-items-start
        p-3
        text-white
        flex-column
        `
    )
}

// populate the output element with the 'tasks' from taskLibrary Array
// taskLibrary array is in local storage
function updateTaskContainer(){
    // clear existing tasks in the html container
    taskContainer.innerHTML = '';

    // check if key 'taskLibrary' already exists
    // if not, set the item in localstorage
    // if so output in the container
    if(localStorage.getItem('taskLibrary')){
        const taskJSONArr = inLocalStorage();

        // output taskElement for each task in the array
        taskJSONArr.forEach(task => {
            const taskElement = `<li><input type="checkbox"> ${task}</li>`;
            taskContainer.innerHTML += taskElement; 
        });
    }else{
        localStorage.setItem('taskLibrary', "[]")
    }
    // add event listeners for the checkboxes to complete task
    completeTask();
}

// add inputted task into taskLibrary
// update localStorage 
function addTask(){
    if(taskInput.value != ''){
        // get the array from localstorage
        const taskJSONArr = inLocalStorage();
        // push the new item from taskInput 
        taskJSONArr.push(taskInput.value);
        // re-set the 'taskLibrary' item in LS
        localStorage.setItem('taskLibrary', JSON.stringify(taskJSONArr));
        updateTaskContainer();
    }

    // clear input
    taskInput.value = '';
}

// takes whats in local storage
// returns the array from LS
function inLocalStorage() {
    const taskJSON = localStorage.getItem('taskLibrary'); // returns a string, must convert to array
    return JSON.parse(taskJSON); // array from LS
}

// takes whats in local storage for completedTasks
function compLocalStorage(){
    const compJSON = localStorage.getItem('compLibrary');
    return JSON.parse(compJSON);
}

// function to update compContainer element 
// with completed tasks from local storage
function updateCompContainer(){
    // empty compContainer
    compContainer.innerHTML = '';

    // check if compLibrary key exist in LS, if not set it
    if(localStorage.getItem('compLibrary')){
        const compLibrary = compLocalStorage(); // get the array from LS
        compLibrary.forEach(item =>{ // output each item into container
            const taskElement = `<li><input type="checkbox"> ${item}</li>`;
            compContainer.innerHTML += taskElement; 
        });
    }else{
        localStorage.setItem('compLibrary', "[]");
    }
}

// when input checkbox is clicked
// add the task to the compContainer
// update the taskLibrary, then taskContainer
function completeTask(){
    const checkBoxes = document.querySelectorAll("#task-container input[type='checkbox'] ");
    checkBoxes.forEach(checkbox =>{
        console.log("comp check");
        checkbox.addEventListener('click', e =>{
            if (checkbox.checked) {
                const liText = checkbox.parentElement.textContent.trim();
                // adding task to compContainer
                const compLibrary = compLocalStorage();
                // console.log("compLibrary: ", compLibrary); 

                compLibrary.push(liText);
                localStorage.setItem('compLibrary', JSON.stringify(compLibrary));
                updateCompContainer();

                // update taskLibrary and taskContainer
                const taskLibrary = inLocalStorage();
                taskLibrary.splice(taskLibrary.indexOf(liText), 1);
                localStorage.setItem('taskLibrary', JSON.stringify(taskLibrary));
                updateTaskContainer();
            }
        })
    })


    // add the task to completed container
    // let taskHTML = `<li>${task}</li>`;
    // compContainer.innerHTML += taskHTML;

}

function addListeners(){
    addBtn.addEventListener('click', ()=>{
        addTask();
    });
    taskInput.addEventListener('keydown', (e)=>{
        // when user presses 'enter', call addTask
        if(e.key == "Enter"){
            addTask();
        }
    });
    clearBtn.addEventListener('click', ()=>{
        localStorage.clear();
        // compContainer.innerHTML = '';
        updateTaskContainer();
        updateCompContainer();
    });
}

// TODO: refactor code


updateTaskContainer();
updateCompContainer();
setClasses();
addListeners(); 