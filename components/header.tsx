import Logo from "@/components/logo";
import { ModeToggle } from "@/components/modeToggle";

export function Header() {
  return (
    <header className="border-b">
      <div className="container max-w-6xl mx-auto p-4 flex items-center justify-between">
        <Logo />
        <ModeToggle />
      </div>
    </header>
  );
}
