import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";

export default function SharedFile() {
  const { token } = useParams();
  const [file, setFile] = useState(null);

  useEffect(() => {
    API.get(`/share/${token}`)
      .then((res) => setFile(res.data))
      .catch(() => alert("Access denied or link expired"));
  }, [token]);

  if (!file) return null;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h3>{file.filename}</h3>
      <p>Shared file access granted</p>
    </div>
  );
}
