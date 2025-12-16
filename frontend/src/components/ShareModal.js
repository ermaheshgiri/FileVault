import { useState } from "react";
import API from "../api/api";

export default function ShareModal({ fileId }) {
  const [emails, setEmails] = useState("");

  const share = async () => {
    const emailList = emails
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    await API.post("/files/share", {
      fileId,
      emails: emailList
    });

    alert("File shared successfully");
    setEmails("");
  };

  return (
    <div className="mt-3">
      <input
        className="form-control mb-2"
        placeholder="Share with emails (comma separated)"
        value={emails}
        onChange={(e) => setEmails(e.target.value)}
      />
      <button className="btn btn-outline-primary btn-sm" onClick={share}>
        Share
      </button>
    </div>
  );
}
