export function checkStatus(todoStatus , remainingTime, dueDate){
    let status = false;
       let statusCheckBox = document.querySelector(".test-todo-complete-toggle");
    if(todoStatus === 'Completed'){
      status = true;
      statusCheckBox.checked = 'true'
    } else{
      status = false
    }

    //check logic
    const todoTitle = document.querySelector(".test-todo-title");
      const todoStatusEl = document.querySelector(".test-todo-status");
      const daysDisplay = document.querySelector(".test-todo-time-remaining");
      const dateDisplay = document.querySelector(".test-todo-due-date");

      // status change logic
      if (!status) {
        status = true;
        todoTitle.style.textDecoration = "none";
        daysDisplay.innerHTML = remainingTime
        dateDisplay.innerHTML = `Due on ${dueDate}`;
        todoStatusEl.innerHTML = `
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
            <span>${todoStatus}</span>
    `;
        return;
      }
      status = false;
      daysDisplay.innerHTML = 'completed';
      dateDisplay.innerHTML = `Due on`;
      todoTitle.style.textDecoration = "line-through";
      todoStatusEl.innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>DONE</span>
    `;
    }