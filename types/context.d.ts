export interface TextStore {
  text: string;
  wordCount: number;
  characterCount: number;
  setText: (newText: string) => void;
  toUpperCase: () => void;
  toLowerCase: () => void;
  trimSpaces: () => void;
  clear: () => void;
  toJson: () => void;
  toMarkdown: () => Promise<void>;
}
