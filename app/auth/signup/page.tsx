"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [showError, setShowError] = useState(false);

  return (
    <main className="flex items-center justify-center">
      <div className="max-[660px]:h-screen max-[660px]:w-screen max-[660px]:rounded-none max-[660px]:p-2 max-[660px]:m-0 flex flex-col gap-4 border p-12 mt-24 rounded-xl bg-accent shadow-lg">
        <div className="flex flex-col gap-4 my-auto">
          <div className="flex flex-col mb-2">
            <span className="text-3xl font-medium text-center">
              Welcome to RentalHive!
            </span>
            <span className="text-sm text-center">Create a new account.</span>
          </div>
          <div className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder="Full name"
              className="focus:border-none"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Your email"
              className="focus:border-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              className="focus:border-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="shadow-xl">Sign up</Button>
          <span className="m-auto">
            Already have an account?{" "}
            <Link href={"/auth/login"} className="text-blue-400">
              Log in
            </Link>
            .
          </span>
        </div>
      </div>
    </main>
  );
}
