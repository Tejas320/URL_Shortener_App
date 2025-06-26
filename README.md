# 🔗 URL Shortener App

A full-stack URL shortener application built using **React**, **Redux Toolkit**, **Node.js**, **Express**, and **MongoDB**, featuring **JWT authentication**, **RESTful API integration**, and **responsive UI** with **TanStack Router** and **Tailwind CSS**.

## 🚀 Features

- 🔐 **JWT Authentication**: Secure signup and login with JSON Web Tokens.
- 🌐 **REST API Integration**: Backend APIs built with Express for URL shortening and user management.
- 🧠 **Redux Toolkit**: Efficient state management with Redux Slices and Redux Thunks for asynchronous operations.
- ⚡ **Axios**: Seamless frontend-backend communication with error handling and optimized API calls.
- 🎨 **Tailwind CSS + TanStack Router**: Fully responsive, modern UI with client-side routing.
- 🗃️ **MongoDB Atlas**: Cloud-hosted SQL database for storing user data and shortened URLs.
- 🧪 **Robust Error Handling**: Graceful fallback UIs and alerts to guide users.

## 📁 Folder Structure

URL_Shortener_App/
│
├── backend/ # Express.js server
│ ├── config/ # Database and JWT config
│ ├── controllers/ # Business logic for auth and URLs
│ ├── middleware/ # JWT auth middleware
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ └── server.js # Entry point for backend
│
├── frontend/ # React app
│ ├── components/ # Reusable UI components
│ ├── features/ # Redux slices (auth, url)
│ ├── pages/ # Routed views
│ ├── redux/ # Store setup and thunks
│ ├── App.jsx # Root component
│ └── main.jsx # Entry point
│
├── .env # Environment variables
├── package.json # Project metadata and scripts
└── README.md # You are here!


## 🛠️ Installation

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas or local MongoDB
- npm or yarn

### Backend Setup

```bash
cd backend
npm install
# Create a .env file and add your variables (e.g. MONGO_URI, JWT_SECRET)
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
