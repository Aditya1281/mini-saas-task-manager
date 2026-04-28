# Mini SaaS Task Manager

## 🚀 Overview

This is a Mini SaaS Task Management application where users can register, login, and manage their own tasks securely.

Each user can:

* Create tasks
* View only their tasks
* Update task status (Pending → Completed)
* Delete tasks

---

## 🔐 Authentication

* JWT (JSON Web Token) based authentication
* Password hashing using bcrypt
* Protected routes for tasks

---

## 🛠 Tech Stack

* Node.js
* Express.js
* PostgreSQL
* JWT (jsonwebtoken)
* bcrypt

---

## 📁 Project Structure

```
backend/
├── config/
├── controllers/
├── routes/
├── middleware/
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Run the server

```bash
node index.js
```

Server will run on:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### 🔹 Auth Routes

* POST `/api/users/register` → Register user
* POST `/api/users/login` → Login & get token

---

### 🔹 Task Routes (Protected)

👉 Requires header:

```
Authorization: Bearer TOKEN
```

* POST `/api/tasks` → Create task
* GET `/api/tasks` → Get user tasks
* PUT `/api/tasks/:id` → Update task status
* DELETE `/api/tasks/:id` → Delete task

---

## 🧪 Testing

You can test APIs using:

* Thunder Client (VS Code)
* Postman

---

## 🎯 Features Implemented

* Secure authentication system
* Multi-user task handling
* Full CRUD operations
* Clean backend architecture

---

## 📌 Note

Each user can only access their own tasks (no global access).
