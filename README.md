# Getting Started with Creating a Todo-List in React 
 A React component called App  represents a todo list application.

The component uses the useState hook to define three state variables: text, task, and editButton. The text state variable holds the value of the input field where users can enter their tasks. The task state variable is an array that stores the list of tasks. The editButton state variable represents the label for the edit button, which toggles between "edit" and "update".


The inputChange function is an event handler that is called whenever the value of the input field changes. It updates the text state variable with the new value entered by the user.


The addTasks function is triggered when the user clicks the "Add" button. It adds the current value of the text state variable (representing a new task) to the task array using the spread operator. This creates a new array with the existing tasks and the new task, and then updates the task state variable with the new array.


The deleteTask function is called when the user clicks the "Delete" button associated with a specific task. It filters the task array to remove the task with the given id (index). The filtered array is then assigned to the task state variable using setTask, effectively updating the task list.


The editFunction is called when the user clicks the edit button associated with a task. It takes items (the task text) and index as parameters. If the editButton state variable is set to "edit," it changes the button label to "update" and sets the text state variable to the items value, allowing the user to edit the task. If the editButton is already set to "update," it reverts the button label back to "edit," updates the task at the specified index in the task array with the new text value, clears the text state variable, and effectively updates the task list.


The task.map function is used to iterate over the task array and render a <p> element for each task. Each <p> element contains the task text, an edit button, and a delete button. The key prop is set to the index to provide a unique identifier for React to efficiently update the list when changes occur.
