const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const task = todoInput.value.trim();
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;

    // Add a delete button to each task
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";
    delBtn.addEventListener("click", () => li.remove());

    li.appendChild(delBtn);
    todoList.appendChild(li);
    todoInput.value = "";
  }
});
