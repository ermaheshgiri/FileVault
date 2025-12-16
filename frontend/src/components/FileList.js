import API from "../api/api";
import ShareModal from "./ShareModal";

export default function FileList({ files }) {
  return (
    <ul className="list-group">
      {files.map((file) => (
        <li key={file._id} className="list-group-item">
          <div className="file-name">{file.filename}</div>
          <div className="file-meta">
            {(file.size / 1024).toFixed(2)} KB • {file.fileType}
          </div>

          <ShareModal fileId={file._id} />
        </li>
      ))}
    </ul>
  );
}
