Codtech Internship Task-2 (Todo List WebAPP) Name: SOURAV KARANTH ID: CT08DS7752 Domain: WEB DEVELOPMENT Duration: SEPTEMBER TO OCTOBER 2024 Mentor: NEELA SANTHOSH KUMAR

PROJECT OVERVIEW
This React To-Do web app provides users with a simple and intuitive task management system, allowing them to add, edit, delete, and mark tasks as completed, styled with Tailwind CSS for a modern, responsive design. Here's a top-level view of the key components:

Imports and Assets
The app imports React and essential hooks like useState, useEffect, and useRef for state management and lifecycle handling. Tailwind CSS is utilized for styling, ensuring a clean and responsive UI for both desktop and mobile views.

Helper Functions
addTodo, deleteTodo, toggleTodo, updateTodo: These functions handle the main operations on the to-do list, such as adding new tasks, updating task status (complete/incomplete), and removing tasks. Additionally, a custom hook useLocalStorage stores the to-do list in local storage, persisting the tasks even after a page refresh.

Main Component (App)

Task Input: A form allows users to add tasks to the to-do list. The input is tracked using state, and tasks are added when the user presses "Enter" or clicks the submit button.
Task List: The tasks are rendered in a list format, with each task displaying its title, a checkbox to mark completion, and edit/delete buttons. Task status is visually indicated, with completed tasks showing strikethrough text.
State Management: The task list is stored in the todos state, which updates dynamically based on user input or actions (add, delete, update, etc.).
Task Filtering
A filtering mechanism lets users switch between viewing all tasks, active tasks, or completed tasks. The filter options are stored in an array and can be selected to show the relevant tasks.

Key Features

Task Addition: Users can enter a task name to add it to the list.
Task Editing: Users can update a task's text by clicking the edit button and saving changes.
Task Deletion: Users can remove tasks by clicking the delete icon.
Completion Toggle: Tasks can be marked as complete or incomplete by using the checkbox next to each task.
Task Filtering: Users can view tasks based on their completion status (all, active, or completed).
User Interaction
The app updates in real-time as users interact with it—adding, editing, and completing tasks immediately reflects in the task list. The UI remains responsive and clean across different screen sizes due to Tailwind CSS styling.

This app showcases a modern, functional task management system built with React and Tailwind CSS, incorporating essential CRUD operations, real-time state updates, and a user-friendly, visually appealing interface.
<img width="298" alt="Todolist" src="https://github.com/user-attachments/assets/b9c9bf77-bc4a-4144-b8aa-8ec9732cd4bf">



