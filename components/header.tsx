"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu, PlusIcon, ShoppingCart } from "lucide-react";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { useRecoilValue } from "recoil";
import { userState } from "@/state/atoms/user";
import { cartState } from "@/state/atoms/cart";

export default function Header() {
  const user = useRecoilValue(userState);

  const cart = useRecoilValue(cartState);

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="#" prefetch={false}>
              <span className="font-bold text-xl">RentalHive</span>
              <span className="sr-only">RentalHive</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link
                href="/"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                About
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
          <span className="font-bold text-xl">RentalHive</span>
          <span className="sr-only">RentalHive</span>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        {!user.isLoading && !user.name ? (
          <div className="ml-auto flex gap-2 items-center">
            <Link href="/auth/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Sign Up</Button>
            </Link>
            <ThemeModeToggle />
          </div>
        ) : (
          <div className="ml-auto flex gap-2 items-center">
            <span>Hello, {user.name}</span>
            <Link href="/cart">
              <Button variant={"secondary"} className="flex items-center gap-1">
                <ShoppingCart className="w-4 h-4" />
                <span>Cart</span>
              </Button>
            </Link>
            <ThemeModeToggle />
          </div>
        )}
      </header>
    </div>
  );
}
