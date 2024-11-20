import { LucideHome } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function HomeBtn() {
  return (
    <Button asChild size="icon" variant="ghost" className="rounded-full min-w-10 text-primary">
      <Link href="/" title="home">
        <LucideHome />
      </Link>
    </Button>
  );
}
