# kuraz-project

📝 Task Manager App (Node.js + MySQL + React)
This is a simple Task Manager application with a Node.js backend using MySQL and a React frontend. It allows users to:

✅ View all tasks

➕ Add new tasks

❌ Delete tasks

🔍 Filter tasks by completion status (completed vs pending)

⚙️ Backend Setup (Node.js + MySQL)
1. Clone the project
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app/backend
2. Install backend dependencies
npm install
3. Set up .env file
Create a .env file in the backend/ folder with your MySQL credentials:

env
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=taskdb
DB_PORT=3306
PORT=3000
4. Set up the database
Open your MySQL client and run the following SQL:

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT FALSE
);
✅ Alternatively, you can hit the /install endpoint to auto-create the table:

Start the server and go to: http://localhost:3000/api/install

5. Run the backend server
node server.js
The backend API will be available at:
➡️ http://localhost:3000/api/tasks

🖥️ Frontend Setup (React)
1. Navigate to frontend folder
cd ../frontend
2. Install dependencies
npm install
3. Run the React app
npm start
The frontend will run at:
➡️ http://localhost:5173 or http://localhost:3001 depending on your config.

🚀 Features You Can Test
📋 Get all tasks
GET http://localhost:3000/api/tasks

➕ Add a task
POST http://localhost:3000/api/tasks

Request body:

json
{
  "title": "Buy milk",
  "completed": false
}
❌ Delete a task
DELETE http://localhost:3000/tasks/:id

🛠 Tech Stack
Backend: Node.js, Express, MySQL

Frontend: React.js

Database: MySQL

🔐 Validations
title must not be empty

completed must be a boolean (true or false)

🧪 Testing Steps
Run MySQL and create taskdb

Start backend (node server.js)

Run React frontend (npm start)

Add tasks through the form

Delete tasks with the "Delete" button

Use browser dev tools (Network tab) to inspect API requests

the user interface 
![image](https://github.com/user-attachments/assets/fb5cbdc0-1f76-45d4-981d-7ca969e23feb)

