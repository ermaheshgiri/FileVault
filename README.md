📁 FileVault – Secure File Sharing Application (MERN Stack)

FileVault is a full-stack file sharing application inspired by Google Drive.
It allows users to upload, manage, and securely share files with other users or via private links, while enforcing strong authentication and authorization.

🚀 Features
✅ Core Features

User Registration & Login (JWT Authentication)

Upload files (PDF, Images, CSV, etc.)

Bulk file upload support

View uploaded files with metadata:

File name

File type

File size

Upload date

Secure file sharing:

Share with specific registered users

Share via private link (authenticated access only)

“Files Shared With Me” section

Logout & protected routes

⭐ Bonus Features

Link-based sharing with expiry

Role-based access control (Owner / Viewer)

Responsive, modern SaaS-style UI

🛠️ Tech Stack
Frontend

React.js

React Router

Axios

Bootstrap + Custom CSS

Backend

Node.js

Express.js

MongoDB (Atlas)

Mongoose

Multer (file uploads)

JWT (authentication)

bcrypt (password hashing)

🔐 Security & Access Control

JWT-based authentication for all protected routes

Only file owners can share files

Shared users can only view/download permitted files

Link-based access:

Requires user authentication

Automatically expires

File type and size validation during upload

📂 Project Structure
FileVault/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── .env (not committed)
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── styles.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md

⚙️ Setup & Installation
🔹 Prerequisites

Node.js (v18+ recommended)

MongoDB Atlas account or local MongoDB

Git

🔹 Backend Setup
cd backend
npm install

Create .env file in backend/
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/filevault
JWT_SECRET=your_secret_key


⚠️ MongoDB Atlas Notes:

Whitelist IP (0.0.0.0/0)

URL-encode password if it contains special characters

Run Backend
npm run dev


Backend runs on:

http://localhost:5000

🔹 Frontend Setup
cd frontend
npm install
npm start


Frontend runs on:

http://localhost:3000

🧪 How to Use the Application

Register at /register

Login using registered credentials

Upload files (single or multiple)

Share files:

With specific users (via email)

Via private link

View shared files under “Files Shared With Me”

Logout to end session

🔌 API Endpoints (Overview)
Authentication
POST /api/auth/register
POST /api/auth/login

Files
POST /api/files/upload
GET  /api/files
GET  /api/files/shared
POST /api/files/share

Sharing
GET /api/share/:token

🎨 UI & Responsiveness

Fully responsive (Desktop / Tablet / Mobile)

Modern card-based dashboard layout

Gradient-based login and dashboard header

Clean UX focused on usability

🧠 Design Decisions

JWT used for stateless authentication

MongoDB used for file metadata storage

Local storage for files (extensible to AWS S3)

Modular backend architecture (controllers, routes, middleware)

Frontend protected routes using React Router

🔮 Future Enhancements

Cloud storage (AWS S3)

File download tracking

Audit logs

File versioning

Dark mode support

Admin dashboard

🎤 Interview Explanation (Short)

“FileVault is a MERN-based secure file sharing application that allows authenticated users to upload and share files with strict access control, either with specific users or via private links.”

👨‍💻 Author

Mahesh Giri
Full Stack Developer (MERN Stack)

✅ Assignment Checklist

✔ File upload (single & bulk)

✔ File metadata display

✔ User-based sharing

✔ Link-based sharing (authenticated)

✔ Authorization & security checks

✔ Bonus feature implemented

✔ Responsive UI

🎉 Final Note

This project was developed with a focus on real-world application design, security, and clean user experience, closely matching the assignment requirements.
