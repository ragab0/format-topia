"use client";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";
import { saveAs } from "file-saver";
import { Copy, FileJson, FileText, FileCode } from "lucide-react";
import { useTextStore } from "@/stores/useTextStore";

export default function Options() {
  const { text } = useTextStore();

  function handleCopy() {
    navigator.clipboard.writeText(text);
    toast.success("Text copied to clipboard!");
  }

  function handleDownload(format: "txt" | "md" | "json") {
    let content = text;
    let filename = "FormTopia-formattedFile";
    let type = "text/plain";

    switch (format) {
      case "json":
        try {
          content = JSON.stringify(JSON.parse(text), null, 2);
          filename += ".json";
          type = "application/json";
        } catch {
          toast.error("Invalid JSON format!");
          return;
        }
        break;
      case "md":
        filename += ".md";
        break;
      default:
        filename += ".txt";
    }

    const blob = new Blob([content], { type: `${type};charset=utf-8` });
    saveAs(blob, filename);
    toast.success(`File downloaded as ${format.toUpperCase()}!`);
  }

  return (
    <Card className="p-4">
      <div className="space-y-2">
        <Button
          onClick={handleCopy}
          variant="outline"
          className="w-full justify-start"
        >
          <Copy className="h-4 w-4 mr-2" />
          Copy to Clipboard
        </Button>
        <Button
          onClick={() => handleDownload("txt")}
          variant="ghost"
          className="w-full justify-start"
        >
          <FileText className="h-4 w-4 mr-2" />
          Download as TXT
        </Button>
        <Button
          onClick={() => handleDownload("md")}
          variant="ghost"
          className="w-full justify-start"
        >
          <FileCode className="h-4 w-4 mr-2" />
          Download as MD
        </Button>
        <Button
          onClick={() => handleDownload("json")}
          variant="ghost"
          className="w-full justify-start"
        >
          <FileJson className="h-4 w-4 mr-2" />
          Download as JSON
        </Button>
      </div>
    </Card>
  );
}
