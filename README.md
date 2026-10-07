# DevStack

A simple web application to browse, filter, and manage developer tools and technologies.

## Features
- Browse through a collection of tech stack tools.
- Add items to your stack and manage selected tools.
- Clean and responsive layout for all screens.

## Tech Stack
- React
- TypeScript
- Tailwind CSS & DaisyUI

---

## React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is a syntax extension for JavaScript that looks like HTML. It allows us to write HTML markup directly inside JavaScript files, making it easier to structure component templates.

### 2. What is the difference between props and state?
Props are used to pass data from a parent component down to a child component, and they cannot be changed by the child. State is data created and managed within a component that can change when a user interacts with the app.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook lets us store and update data inside a functional component. In this project, I used `useState` to track which technologies the user has added to their stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook is used for handling side effects like fetching data. I used it to fetch the technology items from the local JSON file when the app first loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React needs a unique `key` for each item in a list so it can track which items are updated, added, or removed. This helps React render the list efficiently.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI elements based on specific conditions. In this project, I used it to display a fallback message like "No items selected" when the stack list is empty.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child:** Passed directly using `props`.
- **Child to Parent:** The parent passes a function as a prop, and the child calls that function with data when an event happens.