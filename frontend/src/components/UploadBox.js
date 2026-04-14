import React from "react";

export default function UploadBox({ setCode }) {
  const handleChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      setCode(event.target.result);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <h3>📁 Subir archivo</h3>
      <input type="file" onChange={handleChange} />
    </div>
  );
}