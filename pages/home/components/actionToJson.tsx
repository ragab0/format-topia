"use client";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { useTextStore } from "@/stores/useTextStore";

export default function ActionToJson() {
  const { toJson } = useTextStore();

  return (
    <Button onClick={toJson} variant="outline" className="w-full col-span-2">
      <Code className="h-4 w-4 mr-2" />
      To JSON
    </Button>
  );
}
