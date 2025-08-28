let taskArray = []
let container = document.querySelector('.toDoListContainer');

function saveToStorage(){
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

taskArray = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'Make Dinner',
  dueDate: '2025-08-12'
}, {
  name: 'Wash Dishes',
  dueDate: '2025-08-12'
}];

renderToDoList();


function renderToDoList(){
    let todoListHTML = "";

    taskArray.forEach((toDoObject, index) => {
        //const name = toDoObject.name;
        //const dueDate = toDoObject.dueDate;
        const { name, dueDate } = toDoObject;
        const html = `<div class="taskRow">
                        <div>
                            ${name}
                        </div>
                        <div>
                            ${dueDate}
                        </div>
                        <button class="deleteButton">
                            Delete
                        </button>
                    </div>`;
        todoListHTML += html;
    })
    
    container.innerHTML = todoListHTML;

    document.querySelectorAll('.deleteButton').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            taskArray.splice(index, 1);
            renderToDoList();
            saveToStorage();
        })
    })

}

document.querySelector('.addButton').addEventListener('click', () => {
    addTask();
});

document.querySelector('.taskName').addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        addTask();
    }
});

function addTask(){
    
    const taskName = document.querySelector('.taskName').value;
    console.log(taskName);
    const dateofTask = document.querySelector('.dateofTask').value;
    const task = {
        name:taskName, 
        dueDate:dateofTask
    };
    document.querySelector('.taskName').value = '';
    taskArray.push(task);
    console.log(taskArray[taskArray.length-1]);
    console.log(taskArray);

    renderToDoList();

    saveToStorage();

}