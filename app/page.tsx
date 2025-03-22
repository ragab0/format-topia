// import TextFormatter from "@/components/textFormatter";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose dark:prose-invert mt-8 mb-16">
        <h2 className="text-3xl font-bold mb-2">Text Formatting Made Easy</h2>
        <p className="text-muted-foreground">
          Transform your text with our powerful formatting tools. Convert case,
          trim spaces, preview markdown, and more with just a few clicks.
        </p>
      </div>
      {/* <TextFormatter /> */}
    </div>
  );
}
