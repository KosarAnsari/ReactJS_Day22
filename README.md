# ReactJS Day 22 🚀  

In this project, I practiced advanced *state management techniques* in React, focusing on arrays, objects inside arrays, and two important React hooks: *useActionState* and *useId*.  

---

## 📌 Concepts Covered  

### 1. Updating Array in State  
- Learned how to add or update values in an array stored in state.  
- Used the spread operator (...) to ensure immutability.  

Example:  
```jsx
setUsers([...users, newUser]);


---

2. Updating Objects in Array in State

Practiced updating specific objects inside an array.

Used map() to locate the object and return an updated copy without mutating the original array.


Example:

setUsers(users.map(u => 
  u.id === id ? { ...u, age: newAge } : u
));


---

3. useActionState Hook

Explored the useActionState hook for managing form submissions.

Helpful for handling:

Success state ✅

Error handling ❌

Loading states ⏳




---

4. useId Hook

Learned to generate unique IDs for form inputs using useId.

Ensures accessibility and prevents ID conflicts, especially when working with multiple dynamic forms.


Example:

const id = useId();
<label htmlFor={id}>Name</label>
<input id={id} type="text" />


---

⚛ Example Features

Add and update users in an array.

Update objects inside an array (like user’s age).

Form submission handling using useActionState.

Accessible forms with unique IDs using useId.



---

📂 Project Structure

src  
 ├── App.jsx          # Main component (state management, hooks usage)  
 ├── main.jsx         # Entry point  
 ├── App.css          # Styling


---

🛠 Tech Stack

React JS

JavaScript (ES6+)

CSS



---

🚀 How to Run

1. Clone this repository

git clone <your-repo-link>
cd project-folder


2. Install dependencies

npm install


3. Run the development server

npm run dev




---

🌟 Learnings

✔ Arrays and objects in state should always be updated immutably.
✔ map() is useful when updating objects inside an array.
✔ useActionState simplifies form submission logic.
✔ useId improves accessibility in forms by generating unique IDs.


---

#HappyCoding ✨
#ReactJS #FrontendDevelopment #LearningInPublic
