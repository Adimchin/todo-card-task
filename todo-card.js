function displayRemainingDays(selectedDate) {
  //get days logic
  const dueDate = new Date(selectedDate);
  const currentDate = new Date();
  const dateDifference = dueDate - currentDate;
  const days = Math.floor(Math.abs(dateDifference / (1000 * 60 * 60 * 24)));

  //get days element
  const daysDisplay = document.querySelector(".test-todo-time-remaining");

  //display days logic
  if (dateDifference > 0) {
    daysDisplay.innerHTML = `${days} days left`;
    daysDisplay.style.color = "blue";
  } else if (dateDifference === 0) {
    daysDisplay.innerHTML = "Due today";
    daysDisplay.style.color = "red";
  } else {
    daysDisplay.innerHTML = `Overdue by ${days} days`;
    daysDisplay.style.color = "red";
  }
}

function displayDueDate(selectedDate) {
  // get date elemtent
  const dueDate = new Date("2026-03-01T18:00:00Z");

  // format date
  const formattedDate = dueDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // display date
  const dateDisplay = document.querySelector(".test-todo-due-date");
  dateDisplay.innerHTML = `Due on ${formattedDate}`;
}

function changeStatus() {
  // get status element
  let statusCheckBox = document.querySelector(".test-todo-complete-toggle");

  // add status event listener
  let taskStatus = false;
  statusCheckBox.addEventListener("change", () => {
    // get required elements
    const todoTitle = document.querySelector(".test-todo-title");
    const todoStatus = document.querySelector(".test-todo-status");
    const daysDisplay = document.querySelector(".test-todo-time-remaining");
    const dateDisplay = document.querySelector(".test-todo-due-date");

    // status change logic
    if (!statusCheckBox) {
      statusCheckBox = true;
      daysDisplay.innerHTML = '';
      todoTitle.style.textDecoration = "none";
      todoStatus.innerHTML = `
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
            <span>IN PROGRESS</span>
    `;
      return;
    }
    statusCheckBox = false;
    daysDisplay.innerHTML = '';
    dateDisplay.innerHTML = `Due on`;
    todoTitle.style.textDecoration = "line-through";
    todoStatus.innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>DONE</span>
    `;
  });
}

// adding listeners for edit and delete
document.querySelector('.test-todo-edit-button').addEventListener('click', () => {
  alert('task added')
});
document.querySelector('.test-todo-delete-button').addEventListener('click', () => {
  alert('task deleted');
})

// calling necessary functions
displayRemainingDays("March 1, 2026 18:00 UTC");
displayDueDate("March 1, 2026 18:00 UTC");
changeStatus();
