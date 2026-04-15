export function displayRemainingTime(selectedDate) {
  const dueDate = new Date(selectedDate);
  const now = new Date();

  const diff = dueDate - now;
  const absDiff = Math.abs(diff);

  const minutes = Math.floor(absDiff / (1000 * 60));
  const hours = Math.floor(absDiff / (1000 * 60 * 60));
  const days = Math.floor(absDiff / (1000 * 60 * 60 * 24));

  // FUTURE
  if (diff > 0) {
    if (days > 0) {
      return `Due in ${days} day${days > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      return `Due in ${hours} hour${hours > 1 ? "s" : ""}`;
    } else if (minutes > 0) {
      return `Due in ${minutes} minute${minutes > 1 ? "s" : ""}`;
    } else {
      return "Due now!";
    }
  }

  // PAST (OVERDUE)
  else {
    if (days > 0) {
      return `Overdue by ${days} day${days > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      return `Overdue by ${hours} hour${hours > 1 ? "s" : ""}`;
    } else if (minutes > 0) {
      return `Overdue by ${minutes} minute${minutes > 1 ? "s" : ""}`;
    } else {
      return "Overdue now!";
    }
  }
}

export function displayDueDate(selectedDate) {
  // get date elemtent
  const formattedDate = selectedDate.split("T")[0];

return formattedDate;
}