"use client";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { useText } from "@/hooks/useText";
import { toast } from "sonner";

export default function ActionToJson() {
  const { text, setText, wordCount, characterCount } = useText();

  function handleToJSON() {
    try {
      let jsonObject;
      try {
        jsonObject = JSON.parse(text);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_) {
        jsonObject = {
          text: text,
          statistics: {
            wordCount,
            characterCount,
          },
        };
      }
      setText(JSON.stringify(jsonObject, null, 2));
      toast.success("Text converted to JSON!");
    } catch (err) {
      toast.error("Failed to convert to JSON!");
      console.error(err);
    }
  }

  return (
    <Button
      onClick={handleToJSON}
      variant="outline"
      className="w-full col-span-2"
    >
      <Code className="h-4 w-4 mr-2" />
      To JSON
    </Button>
  );
}
