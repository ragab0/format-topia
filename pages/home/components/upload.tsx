"use client";
import { useText } from "@/hooks/useText";
import { FileUp } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

export default function Upload() {
  const { setText } = useText();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result as string;
        setText(content);
        toast.success("File uploaded successfully!");
      };
      reader.readAsText(file);
    },
    [setText]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/plain": [".txt", ".md", ".json"],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
        isDragActive
          ? "border-primary bg-primary/10"
          : "border-muted-foreground/20"
      }`}
    >
      <input {...getInputProps()} />
      <FileUp className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
      <p className="text-muted-foreground">
        {isDragActive
          ? "Drop the file here"
          : "Drag and drop a (txt, md, json) file, or click to select"}
      </p>
    </div>
  );
}
