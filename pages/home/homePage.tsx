import HomeClient from "@/pages/home/components/homeClient";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 mb-32">
      <div className="prose dark:prose-invert mt-8 mb-16">
        <h1 className="text-4xl sm:text-6xl font-bold mb-2">
          Text Formatting Made Easy
        </h1>
        <p className="text-muted-foreground">
          ✔ Your place where you can easily transform your text with our
          powerful formatting tools. Convert case, trim spaces, preview
          markdown, and more with just a few clicks.
        </p>
      </div>
      <HomeClient />
    </div>
  );
}
