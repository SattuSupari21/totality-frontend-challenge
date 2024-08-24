"use client";

import { LoginUser } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { userState } from "@/state/atoms/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSetRecoilState } from "recoil";

export default function Login() {
  const router = useRouter();
  const setUser = useSetRecoilState(userState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleUserLogin() {
    await LoginUser({ email, password }).then(function (result) {
      if (result.user) {
        setUser({
          isLoading: false,
          name: result.user.username,
          email: result.user.email,
        });
        router.push("/");
      } else {
        toast.error(result.error);
      }
    });
  }

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
          <Button className="shadow-xl" onClick={handleUserLogin}>
            Login
          </Button>
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
