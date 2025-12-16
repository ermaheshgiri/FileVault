import API from "../api/api";

export default function Upload({ refresh }) {
  const upload = async (e) => {
    const files = e.target.files;
    const formData = new FormData();

    for (let file of files) {
      formData.append("files", file);
    }

    await API.post("/files/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    refresh();
  };

  return (
    <div className="upload-box">
      <input type="file" multiple onChange={upload} />
    </div>
  );
}
