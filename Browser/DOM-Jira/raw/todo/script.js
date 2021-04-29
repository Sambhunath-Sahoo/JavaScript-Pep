let inputBox = document.querySelector(".input-box");
let taskList = document.querySelector(".task-list");

inputBox.addEventListener("keypress", function(e) {
    
    if (e.code == "Enter" && inputBox.value != "") {
        let task = inputBox.value
        let taskElem = document.createElement("li");
        taskElem.setAttribute("class", "task");
        taskElem.innerText = task;
        taskList.appendChild(taskElem);
        inputBox.value = "";
        taskElem.addEventListener("dblclick", function () {
            taskElem.remove();
        })
    }
})