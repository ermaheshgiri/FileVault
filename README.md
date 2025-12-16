# File Sharing Application

A full-stack MERN (MongoDB, Express, React, Node.js) application that enables secure file uploading, management, and sharing with authentication and authorization features.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **User Authentication**
  - User registration with encrypted passwords
  - Secure login with JWT tokens
  - Protected routes and authentication middleware

- **File Management**
  - Upload files with drag-and-drop or file picker
  - View all uploaded files in a dashboard
  - Delete files
  - Download files
  - Support for multiple file types

- **File Sharing**
  - Generate shareable links for files
  - Share files with specific users
  - Access shared files via unique tokens
  - Secure file access control

- **User Interface**
  - Responsive design with Bootstrap
  - Intuitive dashboard
  - Real-time feedback and notifications

## 🛠 Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt.js** - Password hashing
- **Multer** - File upload handling
- **CORS** - Cross-Origin Resource Sharing

### Frontend
- **React** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Bootstrap** - CSS framework
- **React Testing Library** - Testing utilities

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Nua
```

### 2. Install Backend Dependencies

```bash
cd Backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## ⚙️ Configuration

### Backend Configuration

1. Create a `.env` file in the `Backend` directory:

```bash
cd Backend
```

2. Add the following environment variables to `.env`:

```env
# MongoDB Connection String
MONGO_URI=mongodb://localhost:27017/file-sharing-app
# or use MongoDB Atlas:
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/file-sharing-app

# JWT Secret Key (use a strong, random string)
JWT_SECRET=your_super_secret_jwt_key_here

# Server Port
PORT=5000

# Node Environment
NODE_ENV=development
```

⚠️ **Important Security Notes:**
- Never commit the `.env` file to version control
- Use strong, unique values for `JWT_SECRET`
- For production, use environment-specific values

### Frontend Configuration (Optional)

If your backend runs on a different port or domain, update the API base URL in `frontend/src/api/api.js`.

## 🏃 Running the Application

### Option 1: Run Backend and Frontend Separately

#### Start the Backend Server

```bash
cd Backend
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend server will start on `http://localhost:5000`

#### Start the Frontend Development Server

Open a new terminal:

```bash
cd frontend
npm start
```

The React app will start on `http://localhost:3000`

### Option 2: Run Both Concurrently (Optional Enhancement)

You can install `concurrently` to run both servers with a single command:

```bash
# In the root directory
npm install concurrently --save-dev
```

Add this script to a root `package.json`:

```json
{
  "scripts": {
    "dev": "concurrently \"cd Backend && npm run dev\" \"cd frontend && npm start\""
  }
}
```

Then run:
```bash
npm run dev
```

## 📁 Project Structure

```
Nua/
├── Backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── fileController.js     # File management logic
│   │   └── shareController.js    # File sharing logic
│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT authentication middleware
│   │   └── uploadMiddleware.js   # Multer file upload configuration
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── File.js               # File schema
│   │   └── ShareLink.js          # Share link schema
│   ├── routes/
│   │   ├── authRoutes.js         # Authentication routes
│   │   ├── fileRoutes.js         # File management routes
│   │   └── shareRoutes.js        # File sharing routes
│   ├── uploads/                  # Uploaded files storage
│   ├── .env                      # Environment variables (not in repo)
│   ├── package.json
│   └── server.js                 # Express server entry point
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js            # Axios API configuration
│   │   ├── components/
│   │   │   ├── Dashboard.js      # Main dashboard component
│   │   │   ├── FileList.js       # File list display
│   │   │   ├── Login.js          # Login form
│   │   │   ├── Register.js       # Registration form
│   │   │   ├── SharedFile.js     # Shared file viewer
│   │   │   ├── ShareModal.js     # Share file modal
│   │   │   ├── Upload.js         # File upload component
│   │   │   └── ProtectedRoute.js # Route protection wrapper
│   │   ├── App.js                # Main app component
│   │   ├── index.js              # React entry point
│   │   └── styles.css            # Global styles
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Login user and get JWT token | No |

**Register Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Login Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

### File Routes (`/api/files`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/files/upload` | Upload a new file | Yes |
| GET | `/api/files` | Get all user's files | Yes |
| DELETE | `/api/files/:id` | Delete a file | Yes |
| GET | `/api/files/download/:id` | Download a file | Yes |

### Share Routes (`/api/share`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/share/create` | Create a shareable link | Yes |
| GET | `/api/share/:token` | Access a shared file | No |

**Create Share Link Request Body:**
```json
{
  "fileId": "60d5ec49f1b2c8b1f8e4e1a1"
}
```

## 💻 Usage

### 1. Register a New Account

1. Navigate to `http://localhost:3000`
2. Click on "Register" or navigate to `/register`
3. Fill in your name, email, and password
4. Click "Register" to create your account

### 2. Login

1. Enter your email and password on the login page
2. Click "Login"
3. You'll be redirected to the dashboard upon successful login

### 3. Upload Files

1. In the dashboard, click on the "Upload" button or drag and drop files
2. Select one or more files to upload
3. Files will appear in your file list once uploaded

### 4. Manage Files

- **View Files**: All your uploaded files are displayed in the dashboard
- **Download**: Click the download button next to any file
- **Delete**: Click the delete button to remove a file
- **Share**: Click the share button to generate a shareable link

### 5. Share Files

1. Click the "Share" button on any file
2. A unique shareable link will be generated
3. Copy the link and share it with others
4. Anyone with the link can access and download the file

## 🔒 Security Features

- **Password Encryption**: User passwords are hashed using bcrypt before storage
- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: Backend routes are protected with authentication middleware
- **CORS Configuration**: Controlled cross-origin resource sharing
- **Input Validation**: Server-side validation of user inputs

## 🧪 Testing

### Run Frontend Tests

```bash
cd frontend
npm test
```

### Run Backend Tests (if configured)

```bash
cd Backend
npm test
```

## 🐛 Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB is running locally or your Atlas connection string is correct
- Check firewall settings if using MongoDB Atlas
- Verify the `MONGO_URI` in your `.env` file

### Port Already in Use

If port 5000 or 3000 is already in use:
- Change the `PORT` in the backend `.env` file
- React will prompt you to use a different port automatically

### File Upload Issues

- Check file size limits in `uploadMiddleware.js`
- Ensure the `uploads/` directory exists and has write permissions
- Verify the file type is supported

### CORS Errors

- Ensure the backend CORS configuration allows requests from your frontend URL
- Check that the API base URL in the frontend matches your backend URL

## 🚀 Deployment

### Backend Deployment (Heroku, Render, etc.)

1. Set environment variables on your hosting platform
2. Ensure MongoDB Atlas is configured for production
3. Update CORS settings to allow your frontend domain
4. Deploy using your platform's deployment process

### Frontend Deployment (Vercel, Netlify, etc.)

1. Build the production version:
   ```bash
   cd frontend
   npm run build
   ```
2. Deploy the `build` folder to your hosting platform
3. Update the API base URL to point to your production backend

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Mahesh Giri - 

## 🙏 Acknowledgments

- MongoDB for the database
- Express.js community
- React team
- All contributors and open-source libraries used in this project

## 📧 Contact

For questions or support, please contact [ermaheshgiri@gmail.com]

---

**Made with ❤️ using the MERN Stack**
