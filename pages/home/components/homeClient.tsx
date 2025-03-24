"use client";
import Upload from "./upload";
import Actions from "./actions";
import Options from "./options";
import PreviewDialog from "@/pages/home/components/previewDialog";
import { useState } from "react";
import { useText } from "@/hooks/useText";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";

export default function HomeClient() {
  const { text, setText, wordCount, characterCount } = useText();
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <Upload />
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex gap-2 justify-between sm:items-center max-sm:flex-col ">
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <p>Words: {wordCount}</p>
                  <p>Characters: {characterCount}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPreviewOpen(true)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </div>
              <Textarea
                placeholder="Enter or paste your text here..."
                className="min-h-[400px] resize-y"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
          </Card>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky-actions space-y-6">
            <Actions />
            <Options />
          </div>
        </div>
      </div>

      <PreviewDialog
        open={previewOpen}
        onOpenChange={setPreviewOpen}
        text={text}
        setText={setText}
      />
    </>
  );
}
