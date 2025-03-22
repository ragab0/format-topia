import { TextContext } from "@/providers/textContext";
import { useContext } from "react";

export function useText() {
  const context = useContext(TextContext);
  if (context === undefined) {
    throw new Error("useText must be used within a TextProvider");
  }
  return context;
}
