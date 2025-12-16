import { useEffect, useState } from "react";
import API from "../api/api";
import Upload from "./Upload";
import FileList from "./FileList";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [files, setFiles] = useState([]);
  const [sharedFiles, setSharedFiles] = useState([]);
  const navigate = useNavigate();

  const fetchFiles = async () => {
    const res = await API.get("/files");
    setFiles(res.data);
  };

  const fetchSharedFiles = async () => {
    const res = await API.get("/files/shared");
    setSharedFiles(res.data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    fetchFiles();
    fetchSharedFiles();
  }, []);

  return (
    <div className="dashboard-wrapper">
      {/* Header */}
      <div className="dashboard-top">
        <div>
          <h2>📁 FileVault</h2>
          <p className="subtitle">Secure file sharing</p>
        </div>
        <button className="btn btn-logout" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Upload */}
      <div className="dashboard-card">
        <h5>⬆️ Upload Files</h5>
        <Upload refresh={fetchFiles} />
      </div>

      {/* My Files */}
      <div className="dashboard-card">
        <h5>🗂️ My Files</h5>
        {files.length === 0 ? (
          <p className="empty-text">No files uploaded</p>
        ) : (
          <FileList files={files} />
        )}
      </div>

      {/* Shared Files */}
      <div className="dashboard-card">
        <h5>🤝 Files Shared With Me</h5>
        {sharedFiles.length === 0 ? (
          <p className="empty-text">No files shared with you</p>
        ) : (
          <ul className="shared-list">
            {sharedFiles.map((file) => (
              <li key={file._id} className="shared-item">
                <div className="file-name">{file.filename}</div>
                <div className="file-meta">
                  Shared by: {file.owner?.email}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
