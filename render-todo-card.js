import { todoData } from "./todoData.js";
import { displayDueDate, displayRemainingTime } from "./time-date-logic.js";
import { editTodo } from "./edit-todo.js";
import { checkStatus } from "./check-status.js";
import { collapselogic } from "./collpaseLogic.js";
import { upadateRemainingTime } from "./updateRemainingTime.js";

// displaying the todo card
export function renderTodo() {
  const root = document.querySelector(".root");
  console.log(root);
  let remainingTime = displayRemainingTime(todoData.dueDate);
  const dueDate = displayDueDate(todoData.dueDate);
  let remainingTimeIndicator;
  if (remainingTime.includes("Overdue")) {
    remainingTimeIndicator = "red";
  } else if (remainingTime.includes("Due")) {
    remainingTimeIndicator = "blue";
  } else {
    remainingTimeIndicator = "black";
  }
console.log(todoData.status.toLowerCase().replace(" ", "-"));
  root.innerHTML = `
  <article data-testid="test-todo-card" class="test-todo-card">
         <div class="todo-complete">
            <label>
              <input
                type="checkbox"
                data-testid="test-todo-complete-toggle"
                aria-label="change-status"
                class="test-todo-complete-toggle"
                style="cursor: pointer"
                tabindex="0"
              />
              complete task
            </label>
          </div>
        <section class="to-do-header">
          <h2 data-testid="test-todo-title" class="test-todo-title" style="flex-grow: 1;">
            ${todoData.title}
          </h2>
          <div class="tasks-btns">
            <button
              data-testid="test-todo-edit-button"
              class="test-todo-edit-button"
              aria-label="edit task"
              tabindex="1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-pencil-icon lucide-pencil"
              >
                <path
                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                />
                <path d="m15 5 4 4" />
              </svg>
            </button>
            <button
              data-testid="test-todo-delete-button"
              class="test-todo-delete-button"
              aria-label="delete-task"
              tabindex="2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-trash2-icon lucide-trash-2"
              >
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                <path d="M3 6h18" />
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </button>
          </div>
        </section>
        <p data-testid="test-todo-description" data-testid="test-todo-collapsible-section" class="test-todo-description collapsed">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
          aria-expanded="false"
          aria-controls="test-todo-collapsible-section"
          data-testid="test-todo-expand-toggle"
          class="expand-btn"
          style="margin-bottom: 10px"
        >
          Show more
</button>

        <div class="todo-tags">
        <div class="priority-container">
        <div data-testid="test-todo-priority-indicator" class="priority-indicator high"></div>
          <p data-testid="test-todo-priority" class="test-todo-priority">
            ${todoData.priority}
          </p>
        </div>
          <p data-testid="test-todo-status" class="test-todo-status ${todoData.status.toLowerCase().replace(" ", "-")}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-loader-icon lucide-loader"
            >
              <path d="M12 2v4" />
              <path d="m16.2 7.8 2.9-2.9" />
              <path d="M18 12h4" />
              <path d="m16.2 16.2 2.9 2.9" />
              <path d="M12 18v4" />
              <path d="m4.9 19.1 2.9-2.9" />
              <path d="M2 12h4" />
              <path d="m4.9 4.9 2.9 2.9" />
            </svg>
            <span>${todoData.status}</span>
          </p>
        </div>
        <ul class="test-todo-tags">
          ${todoData.tags
            .map((tag) => {
              return `<li class="test-todo-tag">${tag}</li>`;
            })
            .join("")}
        </ul>
        <section class="date-section">
          <div class="due-date-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-calendar-days-icon lucide-calendar-days"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>
            <time data-testid="test-todo-due-date" class="test-todo-due-date">
             Due on ${dueDate}
            </time>
          </div>
          <div>
            <time
              data-testid="test-todo-time-remaining"
              data-testid="test-todo-overdue-indicator"
              class="test-todo-time-remaining"
              aria-live="polite"
              style="color:${remainingTimeIndicator}"
            >
              ${remainingTime}
            </time>
          </div>
        </section>
      </article>

  `;
  // adding listeners for edit and delete
  document
    .querySelector(".test-todo-edit-button")
    .addEventListener("click", () => {
      editTodo();
    });
  document
    .querySelector(".test-todo-delete-button")
    .addEventListener("click", () => {
      alert("task deleted");
    });
      const btn = document.querySelector(".expand-btn")
        btn.addEventListener("click", () => {collapselogic(btn)});

  checkStatus(todoData.status, remainingTime, dueDate);

  function addStatusListener() {
    const statusCheckBox = document.querySelector(".test-todo-complete-toggle");
    // add status event listener
    let status;

    statusCheckBox.addEventListener("change", () => {
      console.log(status);
      // get required elements
      const todoTitle = document.querySelector(".test-todo-title");
      const todoStatus = document.querySelector(".test-todo-status");
      const daysDisplay = document.querySelector(".test-todo-time-remaining");
      const dateDisplay = document.querySelector(".test-todo-due-date");

      // status change logic
      if (todoData.status === "Completed") {
        status = false;
        todoData.status = "Pending";
        checkStatus(todoData.status, remainingTime, dueDate);
        renderTodo();
        return;
      }
      status = true;
      todoData.status = "Completed";
      checkStatus(todoData.status, remainingTime, dueDate);
      renderTodo();
    });
  }
  addStatusListener();
}
renderTodo();
// update remaingTime
setInterval(() => {upadateRemainingTime()} , 30000)