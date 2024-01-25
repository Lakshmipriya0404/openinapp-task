"use client";
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import styles from "./DisplayUploads.module.css";

interface DisplayUploadProps {
  csvContent: string;
}

interface TableRow {
  id: number;
  links: string;
  prefix: string;
  "select tags": string;
  "selected tags": string;
}

const DisplayUploads: React.FC<DisplayUploadProps> = ({ csvContent }) => {
  const [tableData, setTableData] = useState<TableRow[]>([]);
  const [selectedTags, setSelectedTags] = useState<Record<number, string[]>>(
    {}
  );

  const handleRemoveTag = (id: number, tagToRemove: string) => {
    setSelectedTags((prevSelectedTags) => ({
      ...prevSelectedTags,
      [id]: (prevSelectedTags[id] || []).filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleTagsChange = (id: number, selectedValues: string[]) => {
    setSelectedTags((prevSelectedTags) => ({
      ...prevSelectedTags,
      [id]: [...(prevSelectedTags[id] || []), ...selectedValues],
    }));
  };

  const getAvailableTags = (row: TableRow) => {
    const selectedTagsForRow = selectedTags[row.id] || [];
    return row["select tags"]
      .split(",")
      .map((tag: string) => tag.trim())
      .filter((tag: string) => !selectedTagsForRow.includes(tag));
  };

  useEffect(() => {
    if (csvContent) {
      Papa.parse(csvContent, {
        header: true,
        skipEmptyLines: true,
        complete: (result: any) => {
          const parsedData: TableRow[] = result.data;
          setTableData(parsedData);
        },
      });
    }
  }, [csvContent]);

  return (
    <div className={styles.uploadwrap}>
      <h2>Uploads</h2>
      <div className={styles.uploadtable}>
        {tableData.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>SI.NO</th>
                <th>Links</th>
                <th>Prefix</th>
                <th>Add tags</th>
                <th>Selected tags</th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice(0, 5).map((row, index) => (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>
                    <a
                      href={row.links}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {row.links}
                    </a>
                  </td>
                  <td>{row.prefix}</td>
                  <td>
                    <select
                      multiple
                      value={selectedTags[row.id] || []}
                      onChange={(e) => {
                        const selectedValues = Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        );
                        handleTagsChange(row.id, selectedValues);
                      }}
                    >
                      {getAvailableTags(row).map(
                        (tag: string, tagIndex: number) => (
                          <option key={tagIndex} value={tag}>
                            {tag}
                          </option>
                        )
                      )}
                    </select>
                  </td>
                  <td>
                    {selectedTags[row.id] &&
                      selectedTags[row.id].map((tag, tagIndex) => (
                        <div key={tagIndex} className={styles.tagContainer}>
                          <span>{tag}</span>
                          <button onClick={() => handleRemoveTag(row.id, tag)}>
                            Cancel
                          </button>
                        </div>
                      ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DisplayUploads;
