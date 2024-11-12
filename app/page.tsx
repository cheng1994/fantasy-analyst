import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-slate-100">Welcome to the home page</h1>
      <Button asChild>
        <Link href="/auth">Login</Link>
      </Button>
    </div>
  );
}
