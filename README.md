# Todo Card – Stage 1 Update

## Overview

This update extends the original Todo Card (Stage 0) into a more interactive and stateful component using vanilla JavaScript, HTML, and CSS.

The focus of this stage is improving interactivity, visual feedback, and basic state handling.

---

## What Changed from Stage 0

### 1. Edit Mode

* Added an edit form that replaces the card view
* Users can modify:

  * Title
  * Description
  * Priority
  * Due date
* Includes Save and Cancel actions
* Implemented using visibility toggling

---

### 2. Status Control

* Added a status control (dropdown/select)
* Available states:

  * Pending
  * In Progress
  * Done
* Status updates dynamically based on user input

---

### 3. Checkbox Synchronization

* Checkbox controls completion state
* Behavior:

  * Checked → status becomes "Done"
  * Unchecked → status becomes "Pending"
* Status and checkbox remain synchronized

---

### 4. Priority Indicator

* Added a visual priority indicator (colored element)
* Changes based on:

  * Low
  * Medium
  * High
* Improves visual clarity of task importance

---

### 5. Expand / Collapse Description

* Long descriptions are truncated by default
* Toggle button allows:

  * Expanding full text
  * Collapsing back to preview
* Improves layout readability

---

### 6. Improved Time Handling

* Displays more detailed time remaining:

  * Days
  * Hours
  * Minutes
* Examples:

  * "Due in 2 days"
  * "Due in 3 hours"
  * "Overdue by 45 minutes"

---

### 7. Overdue Indicator

* Overdue tasks are visually highlighted
* Displays "Overdue" message
* Uses color changes for emphasis

---

### 8. Dynamic Visual States

* UI updates based on task state:

  * Done → strike-through title
  * High priority → stronger visual indicator
  * Overdue → highlighted styling
  * In Progress → distinct appearance

---

## Accessibility

* Proper use of semantic HTML elements
* Checkbox includes label for accessibility
* Buttons include accessible labels
* Keyboard navigation supported (Tab, Enter, Space)

---

## Responsiveness

* Mobile-friendly layout
* No horizontal overflow
* Tags wrap correctly
* Works across screen sizes (320px to desktop)

---

## Tech Stack

* HTML
* CSS
* Vanilla JavaScript

---

## Known Limitations

* No data persistence (no backend or storage)
* Time updates may not auto-refresh continuously
* Limited focus management in edit mode

---

## Summary

This stage improves the Todo Card by adding interactivity and state-based behavior, making it closer to a real-world UI component.
