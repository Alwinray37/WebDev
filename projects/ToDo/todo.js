const taskLibrary = [];
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

function getTasksFromLib(){
    // clear existing tasks
    taskContainer.innerHTML = '';
    // clear taskLibrary array
    taskLibrary.length = 0;

    // add tasks from local storage to taskLib
    for(let index = 0; index < localStorage.length; index++){
        let key = localStorage.key(index);
        let value = localStorage.getItem(key);
        taskLibrary.push(value);
    }

    // populate tasks from localstorage to html
    for(let key of Object.keys(localStorage)){
        let taskHTML = `
        <div class="d-flex gap-2" id="taskContID-${key}">
            <input class="checkBox" type="checkbox" id="taskID-${key}"
            <label for="/">${localStorage[key]}</label>
        </div>
        `;
        taskContainer.innerHTML += taskHTML;
    }

    // add event listener for checkbox to complete item
    let checkBox = document.querySelectorAll('.checkBox');
    for(let check of checkBox){
        let idNumber = parseInt(check.id.match(/\d+$/)[0]);
        check.addEventListener('click', ()=>{
            completeTask(idNumber);
            check.classList.add("bg-success");
            // toggle the 'd-none' class in the task 
            let taskContID = document.querySelector(`#taskContID-${idNumber}`);
            taskContID.classList.add('d-none');
        });
    }
}

function addTask(){
    if(taskInput.value != ''){
        let i = localStorage.length;
        // add task into local storage with index
        localStorage.setItem(i, taskInput.value);
        getTasksFromLib();
    }

    // clear input
    taskInput.value = '';
}

function completeTask(taskID){
    console.log(taskID);

    // add the task to completed container
    let taskHTML = `
        <div class="d-flex gap-2">
            <div>- </div>
            <label for="/">${localStorage[taskID]}</label>
        </div>`;
    compContainer.innerHTML += taskHTML;

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
        compContainer.innerHTML = '';
        getTasksFromLib();
    });
}



getTasksFromLib();
setClasses();
addListeners();