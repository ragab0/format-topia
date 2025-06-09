"use client";
import { create } from "zustand";
import { TextStore } from "@/types/context";
import { marked } from "marked";
import { toast } from "sonner";

// we use the set function to merge state with our new slice;
export const useTextStore = create<TextStore>((set, get) => ({
  text: "",
  // derived state
  wordCount: 0,
  characterCount: 0,

  setText: (newText: string) => set({ text: newText }),

  toUpperCase: () => {
    const current = get().text;
    set({ text: current.toUpperCase() });
    toast.success("Text converted to uppercase!");
  },

  toLowerCase: () => {
    const current = get().text;
    set({ text: current.toLowerCase() });
    toast.success("Text converted to lowercase!");
  },

  trimSpaces: () => {
    const current = get().text;
    set({ text: current.replace(/\s+/g, " ").trim() });
    toast.success("Extra spaces trimmed!");
  },

  clear: () => {
    set({ text: "" });
    toast.success("Text cleared!");
  },

  toMarkdown: async () => {
    try {
      const current = get().text;
      const html = await marked(current);
      set({ text: html });
      toast.success("Text converted to Markdown!");
    } catch (err) {
      toast.error("Markdown conversion failed!");
      console.error(err);
    }
  },

  toJson: () => {
    const text = get().text;
    const wordCount = get().wordCount;
    const characterCount = get().characterCount;

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
      set({ text: JSON.stringify(jsonObject, null, 2) });
      toast.success("Text converted to JSON!");
    } catch (err) {
      toast.error("JSON conversion failed!");
      console.error(err);
    }
  },
}));

// a middleware to calculate derived state when text changes
useTextStore.subscribe(function (state, prevState) {
  if (state.text !== prevState.text) {
    useTextStore.setState({
      wordCount: state.text.trim() ? state.text.trim().split(/\s+/).length : 0,
      characterCount: state.text.length,
    });
  }
});
