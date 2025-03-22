"use client";
import Logo from "@/components/logo";
import { ModeToggle } from "@/components/modeToggle";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Logo />
        <ModeToggle />
      </div>
    </header>
  );
}
