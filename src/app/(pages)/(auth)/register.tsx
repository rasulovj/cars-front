"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

export const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Sign In */}
            <Button className="w-full">Sign in</Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-gray-900 px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <FcGoogle className="h-5 w-5" /> Google
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <FaFacebook className="h-5 w-5 text-blue-600" /> Facebook
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <FaGithub className="h-5 w-5" /> GitHub
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
