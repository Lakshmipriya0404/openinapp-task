"use client";
import React, { useState } from "react";
import styles from "./DragnDrop.module.css";

interface DragnDropProps {
  onCsvDrop: (content: string) => void;
}

const DragnDrop: React.FC<DragnDropProps> = ({ onCsvDrop }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [csvContent, setCsvContent] = useState("");

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file instanceof File) {
      handleFile(file);
    } else {
      alert("Please choose a valid CSV file.");
    }
  };

  const handleFile = (file: File) => {
    if (file && file.type === "text/csv") {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        setCsvContent(content);
        onCsvDrop(content);
      };
      reader.readAsText(file);
    } else {
      alert("Please choose a valid CSV file.");
    }
  };

  return (
    <div
      className={styles.container}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ border: isDragOver ? "2px dashed #007bff" : "2px dashed #ccc" }}
    >
      <p>Drag and drop a CSV file here</p>
      <p>or</p>
      <label
        htmlFor="fileInput"
        style={{
          color: "blue",
          cursor: "pointer",
        }}
      >
        Browse
      </label>
      <input
        type="file"
        accept=".csv"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
      <label
        htmlFor="fileInput"
        style={{
          display: "block",
          background: "#007bff",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#605BFF",
        }}
      >
        Upload
      </label>
    </div>
  );
};

export default DragnDrop;
