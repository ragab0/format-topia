export interface TextContextType {
  text: string;
  setText: (text: string) => void;
  wordCount: number;
  characterCount: number;
}