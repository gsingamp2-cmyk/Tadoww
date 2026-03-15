document.addEventListener("DOMContentLoaded", function(){

const taskNameInput = document.querySelector(".taskNameInputField")
const durationInput = document.querySelector(".taskDurationInputField")
const addTaskButton = document.querySelector(".taskAddButton")
const taskListContainer = document.querySelector(".taskListContainer")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []


function renderTasks(){

    taskListContainer.innerHTML = ""

    tasks.forEach((task,index)=>{

        if(!task.progressDates){
            task.progressDates = []
        }

        const completed = task.progressDates.length

        const card = document.createElement("div")
        card.className = "taskItemCard"

        card.innerHTML = `
        <div>
            <strong>${task.taskName}</strong> ${completed}/${task.duration}
        </div>

        <div class="taskActionButtons">
            <button class="taskToggleButton ${completed>0?"doneState":""}" data-index="${index}">
                ✓
            </button>

            <button class="taskEditButton" data-index="${index}">
                Edit
            </button>

            <button class="taskDeleteButton" data-index="${index}">
                Delete
            </button>
        </div>
        `

        taskListContainer.appendChild(card)

    })
}


addTaskButton.addEventListener("click",function(){

    const name = taskNameInput.value.trim()
    let duration = parseInt(durationInput.value)

    if(name === "") return

    if(!duration || duration < 1){
        duration = 1
    }

    const newTask = {
        taskName: name,
        duration: duration,
        progressDates: []
    }

    tasks.push(newTask)

    localStorage.setItem("tasks", JSON.stringify(tasks))

    taskNameInput.value = ""
    durationInput.value = 1

    renderTasks()

})


taskListContainer.addEventListener("click",function(e){

    const index = e.target.dataset.index

    if(e.target.classList.contains("taskToggleButton")){

        const today = new Date().toISOString().split("T")[0]

        if(!tasks[index].progressDates){
            tasks[index].progressDates = []
        }

        if(!tasks[index].progressDates.includes(today)){

            if(tasks[index].progressDates.length < tasks[index].duration){
                tasks[index].progressDates.push(today)
            }

        }

    }

    if(e.target.classList.contains("taskEditButton")){

        const newName = prompt("Edit task name", tasks[index].taskName)

        if(newName){
            tasks[index].taskName = newName
        }

    }

    if(e.target.classList.contains("taskDeleteButton")){
        tasks.splice(index,1)
    }

    localStorage.setItem("tasks", JSON.stringify(tasks))

    renderTasks()

})


renderTasks()

})