"use client";
import { TextContextType } from "@/types/context";
import React, { createContext, useState } from "react";

export const TextContext = createContext<TextContextType | undefined>(
  undefined
);

export function TextProvider({ children }: { children: React.ReactNode }) {
  const [text, setText] = useState("");
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characterCount = text.length;

  return (
    <TextContext.Provider value={{ text, setText, wordCount, characterCount }}>
      {children}
    </TextContext.Provider>
  );
}
