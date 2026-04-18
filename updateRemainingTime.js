import { displayRemainingTime } from "./time-date-logic.js";
import { todoData } from "./todoData.js";

export function upadateRemainingTime() {
  const remainingTimeElement = document.querySelector(".test-todo-time-remaining");
  remainingTimeElement.innerText = displayRemainingTime(todoData.dueDate);
  console.log(remainingTimeElement.innerText);
}