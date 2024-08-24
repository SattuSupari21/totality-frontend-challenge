"use server";

import { cookies } from "next/headers";
import { prisma } from "./db";
import { generateToken } from "./lib/auth";
import { revalidatePath } from "next/cache";

export async function LoginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
        password,
      },
    });
    // if user doesn't exist
    if (!user) return { error: "Invalid email or password!", status: 411 };

    let userId = user.id;
    const token = generateToken(userId);

    cookies().set("auth", token);
    return {
      user: {
        username: user.username,
        email: user.email,
      },
      status: 200,
    };
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function SignupUser({
  email,
  username,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    // return if user already exists
    if (existingUser) return { message: "Email already taken", status: 411 };

    // create new user
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password,
      },
    });
    let userId = newUser.id;
    const token = generateToken(userId);

    cookies().set("auth", token);

    return {
      message: "User created successfully",
      user: {
        username: newUser.username,
        email: newUser.email,
      },
      status: 200,
    };
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function LogoutUser() {
  cookies().delete("auth");
  revalidatePath("/");
}
