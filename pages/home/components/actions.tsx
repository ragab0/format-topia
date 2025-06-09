"use client";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { ArrowUpDown, Type, Eraser, FileCode } from "lucide-react";
import { useTextStore } from "@/stores/useTextStore";
import ActionToJson from "./actionToJson";

export default function Actions() {
  const { toUpperCase, toLowerCase, trimSpaces, clear, toMarkdown } =
    useTextStore();

  return (
    <Card className="p-4">
      <div className="grid sm:grid-cols-2 gap-2 overflow-auto">
        <Button onClick={toUpperCase} variant="outline" className="w-full">
          <Type className="h-4 w-4 mr-2" />
          UPPERCASE
        </Button>
        <Button onClick={toLowerCase} variant="outline" className="w-full">
          <Type className="h-4 w-4 mr-2" />
          lowercase
        </Button>
        <Button onClick={trimSpaces} variant="outline" className="w-full">
          <ArrowUpDown className="h-4 w-4 mr-2" />
          Trim Spaces
        </Button>
        <Button onClick={clear} variant="outline" className="w-full">
          <Eraser className="h-4 w-4 mr-2" />
          Clear
        </Button>
        <hr className="col-span-2 my-2" />
        <ActionToJson />
        <Button
          onClick={toMarkdown}
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
