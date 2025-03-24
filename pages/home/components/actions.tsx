"use client";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { toast } from "sonner";
import { marked } from "marked";
import { ArrowUpDown, Type, Eraser, FileCode } from "lucide-react";
import { useText } from "@/hooks/useText";
import ActionToJson from "./actionToJson";

export default function Actions() {
  const { text, setText } = useText();

  function handleUpperCase() {
    setText(text.toUpperCase());
    toast.success("Text converted to uppercase!");
  }

  function handleLowerCase() {
    setText(text.toLowerCase());
    toast.success("Text converted to lowercase!");
  }

  function handleTrimSpaces() {
    setText(text.replace(/\s+/g, " ").trim());
    toast.success("Extra spaces trimmed!");
  }

  function handleClear() {
    setText("");
    toast.success("Text cleared!");
  }

  /** HANDLE TO */

  async function handleToMarkdown() {
    try {
      const html = await marked(text);
      setText(html);
      toast.success("Text converted to Markdown!");
    } catch (err) {
      toast.error("Failed to convert to Markdown!");
      console.error(err);
    }
  }

  return (
    <Card className="p-4">
      <div className="grid sm:grid-cols-2 gap-2 overflow-auto">
        <Button onClick={handleUpperCase} variant="outline" className="w-full">
          <Type className="h-4 w-4 mr-2" />
          UPPERCASE
        </Button>
        <Button onClick={handleLowerCase} variant="outline" className="w-full">
          <Type className="h-4 w-4 mr-2" />
          lowercase
        </Button>
        <Button onClick={handleTrimSpaces} variant="outline" className="w-full">
          <ArrowUpDown className="h-4 w-4 mr-2" />
          Trim Spaces
        </Button>
        <Button onClick={handleClear} variant="outline" className="w-full">
          <Eraser className="h-4 w-4 mr-2" />
          Clear
        </Button>
        <hr className="col-span-2 my-2" />
        <ActionToJson />
        <Button
          onClick={handleToMarkdown}
          variant="outline"
          className="w-full col-span-2"
        >
          <FileCode className="h-4 w-4 mr-2" />
          To Markdown
        </Button>
      </div>
    </Card>
  );
}
