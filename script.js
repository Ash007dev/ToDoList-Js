const taskArray = []
let container = document.querySelector('.toDoListContainer');
function renderToDoList(){
    let todoListHTML = "";

    for(let i = 0; i < taskArray.length; i++){
        const toDoObject = taskArray[i];
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
                      <button class="deleteButton" onclick="taskArray.splice(${i}, 1); renderToDoList();">
                        Delete
                      </button>
                    </div>`;
        todoListHTML += html;
    }
    container.innerHTML = todoListHTML;
}

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

}

function handleKeyDown(event){
    if (event.key == "Enter"){
        addTask();
    }
}