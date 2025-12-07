import React, { useState, useRef, DragEvent, ChangeEvent } from "react";
import { DndZoneProps, FileWithPreview } from "./DndZone.types";
import {
  formatFileSize,
  validateFile,
  isImageFile,
  getFileIcon,
} from "./DndZone.utils";
import { Upload, X } from "lucide-react";

const DndZone: React.FC<DndZoneProps> = ({
  onFilesChange,
  accept,
  multiple = true,
  maxSize,
  maxFiles,
  disabled = false,
  className = "",
  height = "200px",
  showPreview = true,
  placeholder = "Drag & drop files here or click to browse",
  showFileSize = true,
  allowRemove = true,
}) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles || disabled) return;

    setError("");
    const fileArray = Array.from(newFiles);
    const validFiles: FileWithPreview[] = [];

    // Check max files limit
    if (maxFiles && files.length + fileArray.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    // Validate each file
    for (const file of fileArray) {
      const validation = validateFile(file, accept, maxSize);

      if (!validation.valid) {
        setError(validation.error || "Invalid file");
        continue;
      }

      const fileWithPreview: FileWithPreview = file;

      // Create preview for images
      if (isImageFile(file) && showPreview) {
        fileWithPreview.preview = URL.createObjectURL(file);
      }

      validFiles.push(fileWithPreview);
    }

    const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
    setFiles(updatedFiles);

    if (onFilesChange) {
      onFilesChange(updatedFiles);
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (!disabled) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    // Reset input value to allow selecting the same file again
    e.target.value = "";
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);

    // Revoke object URL to prevent memory leaks
    if (files[index].preview) {
      URL.revokeObjectURL(files[index].preview!);
    }

    setFiles(updatedFiles);

    if (onFilesChange) {
      onFilesChange(updatedFiles);
    }
  };

  // Cleanup previews on unmount
  React.useEffect(() => {
    return () => {
      files.forEach((file) => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [files]);

  return (
    <div className={`dndzone-container ${className}`.trim()}>
      {/* Drop Zone */}
      <div
        className="dndzone-droparea"
        style={{
          height,
          border: `2px dashed ${
            isDragging
              ? "#3b82f6"
              : error
              ? "#ef4444"
              : "#d1d5db"
          }`,
          borderRadius: "8px",
          backgroundColor: isDragging
            ? "#f9fafb"
            : "#f3f4f6",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.6 : 1,
          transition: "all 0.2s ease",
          padding: "20px",
        }}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <Upload
          size={48}
          color={isDragging ? "#3b82f6" : "#9ca3af"}
          style={{ marginBottom: "12px" }}
        />

        <p
          style={{
            color: isDragging ? "#3b82f6" : "#111827",
            fontSize: "16px",
            fontWeight: 500,
            marginBottom: "4px",
            textAlign: "center",
          }}
        >
          {placeholder}
        </p>

        {accept && (
          <p
            style={{
              color: "#6b7280",
              fontSize: "12px",
              marginTop: "4px",
            }}
          >
            Accepted: {accept}
          </p>
        )}

        {maxSize && (
          <p
            style={{
              color: "#6b7280",
              fontSize: "12px",
            }}
          >
            Max size: {formatFileSize(maxSize)}
          </p>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          disabled={disabled}
          style={{ display: "none" }}
        />
      </div>

      {/* Error Message */}
      {error && (
        <div
          style={{
            marginTop: "8px",
            padding: "8px 12px",
            backgroundColor: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: "6px",
            color: "#dc2626",
            fontSize: "14px",
          }}
        >
          {error}
        </div>
      )}

      {/* File List */}
      {files.length > 0 && (
        <div
          className="dndzone-files"
          style={{
            marginTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px",
                borderRadius: "6px",
                transition: "all 0.2s ease",
              }}
            >
              {/* Preview or Icon */}
              {file.preview ? (
                <img
                  src={file.preview}
                  alt={file.name}
                  style={{
                    width: "48px",
                    height: "48px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    flexShrink: 0,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "32px",
                    flexShrink: 0,
                  }}
                >
                  {getFileIcon(file)}
                </div>
              )}

              {/* File Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    marginBottom: "2px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {file.name}
                </p>
                {showFileSize && (
                  <p
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    {formatFileSize(file.size)}
                  </p>
                )}
              </div>

              {/* Remove Button */}
              {allowRemove && !disabled && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  style={{
                    padding: "6px",
                    backgroundColor: "transparent",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <X size={18} color="var(--text-secondary)" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DndZone;
