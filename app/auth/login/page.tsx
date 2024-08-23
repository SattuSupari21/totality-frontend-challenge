"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showError, setShowError] = useState(false);

  return (
    <main className="flex items-center justify-center">
      <div className="max-[660px]:h-screen max-[660px]:w-screen max-[660px]:rounded-none max-[660px]:p-12 max-[660px]:m-0 flex flex-col gap-4 border p-12 mt-24 rounded-xl bg-accent shadow-xl">
        <div className="flex flex-col gap-4 my-auto">
          <div className="flex flex-col mb-2">
            <span className="text-3xl font-medium text-center">
              Welcome to RentalHive!
            </span>
            <span className="text-sm text-center">Log in to your account.</span>
          </div>
          <div className="flex flex-col gap-2">
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
          {showError && (
            <span className="text-red-500 text-center">
              Invalid Email or Password!
            </span>
          )}
          <Button className="shadow-xl">Login</Button>
          <span className="mx-auto">
            Dont have an account? Create a{" "}
            <Link href={"/auth/signup"} className="text-blue-400">
              new account
            </Link>
            .
          </span>
        </div>
      </div>
    </main>
  );
}
