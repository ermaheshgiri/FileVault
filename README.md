# 📁 FileVault – Secure File Sharing Application (MERN Stack)

FileVault is a secure full-stack file sharing application inspired by Google Drive.  
It allows authenticated users to upload, manage, and share files with other registered users or via private links, while enforcing strict authorization and security controls.

This project is built as part of a **Full Stack Developer assignment** using the **MERN stack**.

---

## 🚀 Features

### ✅ Core Features
- User Registration & Login (JWT Authentication)
- Upload files (PDF, Images, CSV, etc.)
- Bulk file uploads
- Display uploaded files with metadata:
  - File name
  - File type
  - File size
  - Upload date
- File sharing:
  - Share with specific registered users
  - Share via private link (authenticated users only)
- “Files Shared With Me” dashboard
- Logout & protected routes

### ⭐ Bonus Features Implemented
- Link-based sharing with expiry
- Role-based access (Owner / Viewer)
- Modern, responsive SaaS-style UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Bootstrap + Custom CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Multer (file uploads)
- JWT (authentication)
- bcrypt (password hashing)

---

## 🔐 Security & Access Control

- JWT-based authentication
- Protected backend routes
- Only file owners can share files
- Shared users can only access permitted files
- Link-based access:
  - Requires authentication
  - Automatically expires
- File type & size validation on upload

---

FileVault/
├── backend/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── uploads/
│ ├── server.js
│ └── .env (not committed)
│
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ ├── components/
│ │ ├── styles.css
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
└── README.md


---

## ⚙️ Installation & Setup

### 🔹 Prerequisites
- Node.js (v18+)
- MongoDB Atlas account or local MongoDB
- Git

---

## 🔹 Backend Setup

```bash
cd backend
npm install
Create .env file in backend/
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/filevault
JWT_SECRET=your_secret_key


⚠️ MongoDB Atlas:

Whitelist IP: 0.0.0.0/0

URL-encode password if it contains special characters

Start Backend
npm run dev


Backend runs at:

http://localhost:5000

🔹 Frontend Setup
cd frontend
npm install
npm start


Frontend runs at:

http://localhost:3000

🧪 How the Application Works

User registers & logs in

JWT token stored in browser

User uploads one or more files

Files appear in dashboard

Owner can:

Share files with users (email-based)

Generate private share link

Shared users see files under Files Shared With Me

Unauthorized users are blocked

🔌 API Endpoints
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

🧩 Key Code Snippets
🔐 JWT Authentication Middleware
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.userId = decoded.id;
  next();
};

📤 File Upload (Multer)
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

module.exports = multer({ storage });

🔐 Protected Route (React)
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" replace />;
}

📊 Dashboard Component (React)
useEffect(() => {
  API.get("/files").then(res => setFiles(res.data));
  API.get("/files/shared").then(res => setSharedFiles(res.data));
}, []);

🎨 UI & Responsiveness

Responsive layout for mobile, tablet & desktop

Gradient-based authentication pages

Card-based dashboard UI

Clean UX focused on usability

🧠 Design Decisions

JWT used for stateless authentication

MongoDB stores metadata, files stored locally

Modular backend architecture

Centralized Axios instance with interceptor

Frontend protected routing

🔮 Future Enhancements

AWS S3 / Cloudinary storage

File versioning

Audit logs

Download analytics

Dark mode

Admin panel

🎤 Interview Explanation (Short)

“FileVault is a MERN-based secure file sharing application that allows authenticated users to upload and share files with strict access control using JWT authentication and role-based permissions.”

👨‍💻 Author

Mahesh Giri
Full Stack Developer (MERN)
## 📂 Project Structure

