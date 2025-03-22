import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-4 md:py-0">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left font-medium">
          Made with ❤️ by{"  "}
          <Link
            href="https://ragab.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="font-bold underline underline-offset-4"
          >
            Ragab
          </Link>
        </p>
      </div>
    </footer>
  );
}
