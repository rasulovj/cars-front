"use client";

import Image from "next/image";
import React from "react";
import Wrapper from "./wrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Plus, Sun, User, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { useGetCurrentUser } from "@/services/authServices";

const Navbar = () => {
  const { data: currentUser } = useGetCurrentUser();
  const { setTheme } = useTheme();
  const router = useRouter();
  console.log(currentUser);

  return (
    <div>
      <Wrapper>
        <div className="flex items-center justify-between h-[72px]">
          <Link href={"/"} className="cursor-pointer flex items-center gap-2">
            <Image src="/icon.svg" alt="logo" width={40} height={40} />{" "}
            <p className="text-xl font-bold">Finder</p>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/cars">New cars</Link>
            <Link href="/cars">Used cars</Link>
            <Link href="/">Contact us</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {currentUser ? (
              <Button variant="outline" onClick={() => router.push("/profile")}>
                <User /> Profile
              </Button>
            ) : (
              <Button variant="outline" onClick={() => router.push("/login")}>
                <User />
              </Button>
            )}

            <Button className="bg-pink-bg text-white">
              <Plus /> Sell car
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Menu className="cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col gap-6 p-6">
                <div className="flex flex-col gap-4">
                  <Link href="/">New cars</Link>
                  <Link href="/">Used cars</Link>
                  <Link href="/">Contact us</Link>
                </div>

                <div className="flex flex-col gap-4 mt-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex gap-2">
                        <Sun className="h-4 w-4 dark:hidden" />
                        <Moon className="h-4 w-4 hidden dark:block" />
                        Theme
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {currentUser ? (
                    <Button
                      variant="outline"
                      onClick={() => router.push("/profile")}
                    >
                      <User /> Profile
                    </Button>
                  ) : null}
                  <Button
                    variant="outline"
                    onClick={() => router.push("/login")}
                  >
                    <User /> Login
                  </Button>
                  <Button className="bg-pink-bg text-white">
                    <Plus /> Sell car
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
