export function collapselogic(btn) {
  const desc = document.querySelector(".test-todo-description");
  const isCollapsed = desc.classList.contains("collapsed");
  const isExpanded = btn.getAttribute("aria-expanded") === "true";
  // toggle aria-expanded attribute
  btn.setAttribute("aria-expanded", !isExpanded);
  if (isCollapsed) {
    desc.classList.remove("collapsed");
    desc.classList.add("expanded");
    btn.textContent = "Show less";
  } else {
    desc.classList.remove("expanded");
    desc.classList.add("collapsed");
    btn.textContent = "Show more";
  }
}