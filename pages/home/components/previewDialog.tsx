"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Textarea } from "../../../components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ReactJson = dynamic(() => import("react-json-view"), {
  ssr: false,
});
const ReactMarkdown = dynamic(() => import("react-markdown"), {
  ssr: false,
});

interface PreviewDialogProps {
  open: boolean;
  text: string;
  onOpenChange: (open: boolean) => void;
  setText: (text: string) => void;
}

export function PreviewDialog({
  open,
  onOpenChange,
  text,
  setText,
}: PreviewDialogProps) {
  const [activeTab, setActiveTab] = useState("markdown");
  const { resolvedTheme } = useTheme();

  function getJsonPreview() {
    try {
      const formatted = JSON.parse(text);
      return (
        <ReactJson
          src={formatted}
          theme={resolvedTheme === "dark" ? "tomorrow" : "rjv-default"}
        />
      );
    } catch {
      return <div className="text-destructive">Invalid JSON</div>;
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-full h-screen grid grid-rows-[auto_1fr] gap-1 overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-center">Preview Mode</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex items-center justify-center mx-auto mb-2">
            <TabsTrigger value="markdown">Markdown</TabsTrigger>
            <TabsTrigger value="json">JSON</TabsTrigger>
          </TabsList>
          <div className="preview-body grid grid-cols-2 gap-2 h-full">
            <Textarea
              placeholder="Enter or paste your text here..."
              className="min-h-full resize-y"
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="inputField"
            />
            <div className="preview-view overflow-auto">
              <TabsContent value="markdown">
                <div className="preview-markdown">
                  <ReactMarkdown>{text}</ReactMarkdown>
                </div>
              </TabsContent>
              <TabsContent value="json">
                <div className="preview-json">{getJsonPreview()}</div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
