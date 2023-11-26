
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");



    var newTask = document.createElement("li");
    newTask.innerHTML = taskInput.value + ' <span class="delete" onclick="deleteTask(this)">Delete</span> <span class="edit" onclick="editTask(this)">Edit</span>';
    taskList.appendChild(newTask);

    taskInput.value = "";

}

function deleteTask(element) {
    element.parentNode.remove();
}

function deleteAllTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}

function editTask(element) {
    var newText = prompt("Edit task:", element.parentNode.firstChild.nodeValue);
    if (newText !== null) {
        element.parentNode.firstChild.nodeValue = newText;
    }
}
