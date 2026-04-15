import { todoData } from "./todoData.js";
import { renderTodo } from "./render-todo-card.js";
import { displayDueDate } from "./time-date-logic.js";

export function editTodo() {
  const todoEditcard = `
<section>
<div class="edit-task-card">
<div class="card-header">
<h2 class="card-title">Edit Task</h2>
</div>
<form>
<div class="form-group">
<label>Task Title</label>
<input class="input-text" placeholder="What needs to be done?" type="text" value="${todoData.title}"/>
</div>
<div class="form-group">
<label>Description</label>
<textarea class="textarea-field" placeholder="Add more details about this task..." rows="4">${todoData.description}</textarea>
</div>
<div class="metadata-grid">
<div class="form-group">
<label>Due Date</label>
<div class="relative-container">
<input class="input-date" type="date" value="${displayDueDate(todoData.dueDate)}"/>
</div>
</div>
<div class="form-group">
<label>Priority</label>
<div class="relative-container">
<span class="material-symbols-outlined icon-overlay icon-priority">flag</span>
<select class="select-field priority-select">
<option ${todoData.priority === "Low" ? "selected" : ""}>Low</option>
<option ${todoData.priority === "Medium" ? "selected" : ""}>Medium</option>
<option ${todoData.priority === "High" ? "selected" : ""} >High</option>
</select>
</div>
</div>
<div class="form-group">
<label>Status</label>
<div class="relative-container">
<span class="material-symbols-outlined icon-overlay icon-status">radio_button_partial</span>
<select class="select-field status-select">
<option ${todoData.status === "Pending" ? "selected" : ""}>Pending</option>
<option ${todoData.status === "In Progress" ? "selected" : ""} >In Progress</option>
<option ${todoData.status === "Completed" ? "selected" : ""}>Completed</option>
</select>
</div>
</div>
</div>
<div class="footer-actions">
<button class="btn btn-cancel" type="button">Cancel</button>
<button class="btn btn-save" type="submit">Save Changes</button>
</div>
</form>
</div>
</section>
`;

  const root = document.querySelector(".root");
  root.innerHTML = todoEditcard;

  // defining the cancel button functionality
  const cancelBtn = document.querySelector(".btn-cancel");
  cancelBtn.addEventListener("click", () => {
    renderTodo();
  });

    // defining the save button functionality
  const saveBtn = document.querySelector(".btn-save");
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const taskTitle = document.querySelector(".input-text").value;
    const taskDescription = document.querySelector(".textarea-field").value;
    const taskDueDate = document.querySelector(".input-date").value;
    const taskPriority = document.querySelector(".priority-select").value;
    const taskStatus = document.querySelector(".status-select").value;
  
    todoData.title = taskTitle;
    todoData.description = taskDescription;
    todoData.dueDate = taskDueDate;
    console.log(taskDueDate)
    todoData.priority = taskPriority;
    todoData.status = taskStatus;

    console.log(taskStatus)

    // re-render the todo card with updated data
    renderTodo();

  });
}
