import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Link
        href="https://github.com/SattuSupari21/totality-frontend-challenge"
        target={"_blank"}
      >
        <Button variant={"link"} className="text-lg">
          Click to go to GitHub Repo...
        </Button>
      </Link>
    </div>
  );
}
