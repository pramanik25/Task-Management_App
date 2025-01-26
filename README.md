# Task Management App - Assignment Submission

**Assignment Title:** Build a Simple Task Management App

**Objective:**

This project fulfills the requirements of a front-end development assignment, designed to evaluate the intern's proficiency in:

1.  Creating a functional and interactive user interface using React.js.
2.  Implementing robust state management for dynamic data updates.
3.  Writing clean, reusable, and well-structured code adhering to best practices.
4.  Following component-based architecture principles for modularity and maintainability.
5.  Utilizing modern frontend development tools and libraries to build a compelling user experience.

**Developed Features (Task Description - Core Requirements):**

1.  **Effortless Task Creation (Add a New Task):**
    *   Users can easily add new tasks by providing a clear **title** and an optional **description**, ensuring all necessary task details are captured.
    *   Each task is automatically assigned a **status** of **Pending** upon creation, providing a clear starting point for task management.
    *   Implemented with a user-friendly form in the `AddTask.js` component, leveraging React's `useState` for form input management and the `handleAddTask` function in `App.js` to manage task creation logic. Input validation ensures task titles are not empty.

2.  **Dynamic and Filterable Task Visualization (Task List):**
    *   Presents a scrollable and well-organized **Task List** UI, ensuring all tasks are easily accessible and viewable, even with a growing number of tasks.
    *   Each **Task Item** prominently displays the task's **title**, **description**, and current **status**, providing users with a clear overview of each task at a glance.
    *   Users can efficiently **filter tasks by status** (**All**, **Pending**, **Completed**), enabling focused views and improved task organization based on completion stage.
    *   Achieved through the modular `TaskList.js` and `TaskItem.js` components, utilizing React's `.map()` for dynamic list rendering, conditional rendering for empty lists, and intuitive filter buttons driven by `useState` for `filterStatus` and the `getFilteredTasks` function for efficient data filtering. Data is loaded from a mock API on application start.

3.  **Intuitive Task Completion Management (Mark as Completed):**
    *   Provides seamless functionality to **Mark tasks as "Completed"** and toggle back to **"Pending"**, allowing users to easily update task progress.
    *   **Visual distinction for completed tasks** (strikethrough text) offers immediate and clear visual feedback on task status.
    *   Implemented with a user-friendly "Mark as Completed/Pending" button within each `TaskItem.js` component, utilizing the `handleUpdateTaskStatus` function in `App.js` to manage status updates and persist changes to the mock API using `PATCH` requests.

4.  **Efficient Task Removal (Delete Task):**
    *   Users can effortlessly **delete tasks** directly from the Task List, ensuring a clean and manageable task environment.
    *   Implemented with a prominent "Delete" button in each `TaskItem.js`, leveraging the `handleDeleteTask` function in `App.js` to manage task deletion and persist removals to the mock API using `DELETE` requests.

5.  **API-Driven Persistence and Data Management (Save State - API Integration):**
    *   **Tasks are dynamically loaded from a mock API (JSONPlaceholder)** upon application initialization, showcasing the ability to fetch and display data from external sources.
    *   **New tasks, status updates, and deletions are persisted to the mock API**, demonstrating proficiency in sending data to and interacting with backend services using RESTful API principles (`POST`, `PATCH`, `DELETE` requests).
    *   Employs React's `useEffect` hook for initial data fetching in `App.js`, and utilizes `fetch` API for all communication with the JSONPlaceholder mock API, effectively replacing the initial `localStorage`-based persistence with a more robust, albeit mock-API driven, data management solution.

**Bonus Features (Implemented - Enhanced User Experience):**

*   **Efficient Task Discovery (Search Bar):**
    *   A **Search Bar** is integrated to enable users to quickly find tasks by title, significantly enhancing task list navigation and discoverability, especially for larger task sets.
    *   Implements **case-insensitive search** functionality, ensuring user-friendly and flexible search capabilities.
    *   Implemented with a search input field in `App.js`, managed by `useState` for `searchTerm`, and filtering logic within the `getFilteredAndSearchedTasks` function in `TaskList.js`, dynamically updating the task list display based on user input.

*   **Flexible Task Modification (Edit Task):**
    *   Users can **edit existing tasks** directly within the Task List, allowing for easy correction or refinement of task details without needing to delete and recreate tasks.
    *   Enables modification of both **task titles** and **descriptions**, providing comprehensive editing capabilities.
    *   Implemented with an "Edit" button in `TaskItem.js` to toggle edit mode, utilizing `useState` for `isEditing`, input fields for editing title and description, and "Save" and "Cancel" buttons with corresponding handlers. The `handleUpdateTask` function in `App.js` manages local state updates for edited tasks.

*   **Intuitive Task Reordering (Drag-and-Drop Sorting):**
    *   Users can visually **reorder tasks** within the Task List using intuitive **drag-and-drop functionality**, allowing for personalized task prioritization and organization.
    *   Implemented using the `react-beautiful-dnd` library, wrapping the `TaskList` with `<DragDropContext>` and `<Droppable>` components, and each `TaskItem` with `<Draggable>`, providing a smooth and user-friendly drag-and-drop experience.  The `handleDragEnd` function in `App.js` updates the task order in the application state.

*   **Seamless Multi-Device Experience (Responsive Design):**
    *   The **User Interface is designed to be fully responsive**, ensuring a seamless and consistent user experience across a range of devices, from desktop computers to mobile phones.
    *   Utilizes **CSS Media Queries** within `App.css`, `AddTask.css`, `TaskList.css`, and `TaskItem.css` to dynamically adjust layout, font sizes, and component styling based on screen size, ensuring optimal readability and usability on various screen dimensions.

**Technical Requirements & Implementation Details:**

1.  **Framework:** Developed using **React.js**, leveraging its component-based architecture for modularity and efficient UI rendering.
2.  **State Management:** Employs **React Hooks (`useState`, `useEffect`)** for effective and modern state management, ensuring dynamic updates and efficient handling of application data and side effects.
3.  **Styling & UI Library:**
    *   **Material UI (MUI) Library:**  The application's user interface is built and styled using **Material UI**, a popular React UI framework. Material UI provides a rich set of pre-built, accessible, and customizable React components adhering to Material Design principles, resulting in a visually appealing and consistent user experience. Material UI components used include: `Container`, `Typography`, `TextField`, `Button`, `Paper`, `List`, `ListItem`, `ListItemText`, `ListItemSecondaryAction`, `IconButton`, `Checkbox`, `Box`, `ButtonGroup`.
    *   **CSS-in-JS Styling (Material UI `sx` prop):** Material UI's built-in CSS-in-JS styling capabilities, primarily utilizing the `sx` prop, are employed for efficient and component-level styling, promoting maintainability and encapsulation.
    *   **Minimal Custom CSS:**  Custom CSS is kept to a minimum in `App.css` and component-specific CSS files, primarily for basic layout adjustments and overriding default styles where necessary, with Material UI handling the majority of the styling.
4.  **Tools & Setup:**
    *   **`create-react-app`:**  The project was bootstrapped using `create-react-app`, providing a streamlined build setup and development environment.
    *   **`react-beautiful-dnd`:** The `react-beautiful-dnd` library is integrated for implementing drag-and-drop sorting functionality.
    *   **`fetch` API:** The built-in `fetch` API is used for all HTTP communication with the JSONPlaceholder mock API, demonstrating proficiency in asynchronous data fetching and API interaction.
5.  **Code Quality & Best Practices:**
    *   **Component-Based Architecture:**  The application is structured using a component-based architecture, promoting code reusability, modularity, and maintainability.
    *   **Clean, Readable, and Modular Code:**  Code is written with a focus on clarity, readability, and modularity, utilizing descriptive variable and function names, consistent formatting, and comments to enhance understanding and maintainability.
    *   **DRY (Don't Repeat Yourself) Principle:**  Code duplication is minimized by extracting reusable components and helper functions.

**Deliverables:**

1.  **Full Source Code:**  The complete source code of the Task Management App project is available in a public GitHub repository: [YOUR_REPOSITORY_URL] *(Replace with your repo URL)*.
2.  **README.md File:** This `README.md` file, providing comprehensive project documentation, setup instructions, feature summaries, and evaluation criteria alignment.
3.  **Local Development Instructions:** The application is designed to be run locally for development and evaluation purposes.

**Evaluation Criteria Alignment:**

1.  **Functionality:** The application comprehensively meets all core requirements of the assignment and effectively implements several bonus features, significantly enhancing its functionality and user experience.
2.  **Code Quality:** The codebase is well-structured, highly modular, and written with a strong emphasis on readability and maintainability, adhering to React best practices and modern JavaScript conventions.
3.  **UI/UX:** The User Interface is clean, intuitive, and responsive, leveraging Material UI components to create a visually appealing and user-friendly experience. Clear visual cues and interactive elements enhance usability.
4.  **State Management:**  The application demonstrates effective and appropriate state management using React Hooks (`useState`, `useEffect`), ensuring dynamic updates and efficient data handling.
5.  **Persistence:**  While leveraging a mock API (JSONPlaceholder), the application successfully demonstrates API integration for data persistence, fetching tasks on load and persisting changes through `POST`, `PATCH`, and `DELETE` requests.
6.  **Creativity and Effort:** The project showcases significant effort and creativity in going beyond the core requirements by implementing multiple bonus features, integrating with a mock API, and focusing on code quality, UI/UX, and responsive design, resulting in a robust and well-rounded Task Management Application.

**Installation and Setup (Local Development):**

1.  **Clone the repository:**
    ```bash
    git clone [[REPOSITORY_URL](https://github.com/pramanik25/Task-Management_App.git)]
    cd [YOUR_REPOSITORY_FOLDER_NAME]
    ```
  

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the application:**
    ```bash
    npm start
    ```

4.  **Open in browser:** The application will be accessible at `http://localhost:3000` in your web browser.

**Usage Instructions:**

*   **Adding Tasks:** Use the "Add New Task" section to input task titles and descriptions and click "Add Task" to add them to your task list.
*   **Viewing Tasks:**  The "Task List" section dynamically displays all tasks, including their titles, descriptions, and statuses.
*   **Filtering Tasks:** Utilize the "All", "Pending", and "Completed" filter buttons above the Task List to view tasks based on their status.
*   **Searching Tasks:** Employ the search bar to filter tasks in real-time by matching keywords in their titles.
*   **Marking Tasks as Completed/Pending:** Toggle the checkbox next to each task item to instantly update its status between "Pending" and "Completed".
*   **Deleting Tasks:** Click the "Delete" icon (trash can icon) associated with each task to permanently remove it from the list.
*   **Editing Tasks:** Click the "Edit" button on a task item to switch to edit mode, allowing modification of the task's title and description. Use the "Save" button to apply changes or "Cancel" to revert.
*   **Drag-and-Drop Sorting:** Reorder tasks within the list by clicking and dragging task items to their desired position, providing a visual and intuitive way to prioritize tasks.

**Assumptions and Constraints:**

*   **Mock API for Demonstration:**  The application utilizes JSONPlaceholder, a mock API, for demonstration purposes. While API interactions are fully implemented (CRUD operations), data persistence and API behavior are limited by the nature of a mock service. Real-world backend APIs would offer more robust and persistent data storage.
*   **Simplified Task Model:** The task data model is intentionally simplified, focusing on core task attributes (title, description, status). Advanced features like due dates, priority levels, user authentication, or task categories are outside the scope of this assignment.
*   **Basic Error Handling:**  Error handling is implemented primarily through `console.error` for logging API errors.  A production-ready application would require more comprehensive error handling and user feedback mechanisms.
*   **No User Authentication or Authorization:**  The application does not include user authentication or authorization features, as it is designed as a single-user, local task management tool for demonstration purposes.

**Key Improvements and Learning Points:**

*   **Material UI Integration:**  Successfully integrated Material UI to create a visually appealing and user-friendly interface, significantly enhancing the application's UI/UX and demonstrating proficiency in utilizing UI libraries.
*   **API Integration with JSONPlaceholder:**  Implemented full CRUD operations against the JSONPlaceholder mock API, demonstrating the ability to fetch data from and persist changes to external services, moving beyond purely client-side data management.
*   **Responsive Design Implementation:** Achieved a responsive layout using CSS Media Queries, ensuring the application is usable and well-presented across different screen sizes and devices.
*   **Code Structure and Readability:**  Refocused on writing clean, modular, and well-commented code throughout the development process, improving maintainability and demonstrating adherence to best practices for React application development.

** Successfully deployed on vercel (https://task-management-app-tawny-two.vercel.app/)
---

**Developed by:** Vikash Pramanik
**GitHub Repository:** [[REPOSITORY_URL](https://github.com/pramanik25/Task-Management_App.git)] 
