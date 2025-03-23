import LogoIcon from "@/public/svgs/LogoIcon";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-2xl font-bold hover:opacity-90"
    >
      <LogoIcon />
      FormatTopia
    </Link>
  );
}
