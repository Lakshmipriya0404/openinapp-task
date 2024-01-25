"use client";
import DragnDrop from "@/components/DragnDrop/DragnDrop";
import styles from "./uploads.module.css";
import React, { useState } from "react";
import DisplayUploads from "@/components/DisplayUploads/DisplayUploads";

const UploadsPage = () => {
  const [csvContent, setCsvContent] = useState("");

  const handleCsvContent = (content: React.SetStateAction<string>) => {
    setCsvContent(content);
  };
  return (
    <div className={styles.container}>
      <div className={styles.dragndrop}>
        <DragnDrop onCsvDrop={handleCsvContent} />
      </div>
      <div className={styles.disptable}>
        <DisplayUploads csvContent={csvContent} />
      </div>
    </div>
  );
};

export default UploadsPage;
