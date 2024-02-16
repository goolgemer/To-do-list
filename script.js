document.addEventListener("DOMContentLoaded", onPageLoaded);

function onPageLoaded() {
  const inputTitle = document.getElementById("taskInputTitle");

  inputTitle.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  listenDeleteTodo();
}

function addTask() {
  const inputTitle = document.getElementById("taskInputTitle");
  const inputSubtitle = document.getElementById("taskInputSubtitle");
  const taskList = document.getElementById("taskList");
  const taskText = inputTitle.value.trim();
  const taskTextTwo = inputSubtitle.value.trim();

  if (taskText && taskTextTwo) {
    const taskWrapper = document.createElement("div");
    taskWrapper.classList.add("taskWrapper");
    const li = document.createElement("li");
    const litwo = document.createElement("li");
    const completedBtn = document.createElement("button");
    completedBtn.textContent = "Завершено";
    completedBtn.classList.add("completedBtn");
    litwo.classList.add("taskSubtitle");
    li.classList.add("taskTitle");
    li.textContent = taskText;
    litwo.textContent = taskTextTwo;
    taskWrapper.appendChild(li);
    taskWrapper.appendChild(litwo);
    taskWrapper.appendChild(completedBtn);
    taskList.appendChild(taskWrapper);
    inputTitle.value = "";
    inputSubtitle.value = "";
  } else {
    alert("не все поля заполнены");
  }
}

function listenDeleteTodo() {
  const li = document.querySelector("li");
  const taskList = document.getElementById("taskList");
  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("completedBtn")) {
      const taskWrapper = event.target.parentElement;
      taskWrapper.classList.add("completed");
    }
  });
}

function clearTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
}
