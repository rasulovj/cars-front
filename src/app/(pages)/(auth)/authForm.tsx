"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
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
import { ArrowLeft } from "lucide-react";
import { useLogin, useRegister } from "@/services/authServices";
import Link from "next/link";
import { LoginFormValues } from "@/types";
import Cookies from "js-cookie";

type AuthFormProps = {
  mode: "login" | "register";
};

export function AuthForm({ mode }: AuthFormProps) {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const router = useRouter();
  const loginHook = useLogin();
  const registerHook = useRegister();

  const { mutate, isPending } = mode === "login" ? loginHook : registerHook;

  const onSubmit = (data: LoginFormValues) => {
    mutate(data, {
      onSuccess: (res) => {
        toast.success(
          mode === "login" ? "Login successful!" : "Registration successful!",
          {
            description: mode === "login" ? `Welcome back` : `Welcome`,
          }
        );
        Cookies.set("token", res.token);
        router.push("/profile");
      },
      onError: (error: Error) => {
        toast.error(mode === "login" ? "Login failed" : "Registration failed", {
          description: error.message || "Something went wrong",
        });
      },
    });
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="relative w-full max-w-md">
          <Button
            variant="ghost"
            size="sm"
            className="absolute -top-12 left-0 flex items-center gap-2"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>

          <Card className="w-full shadow-lg rounded-2xl bg-accent py-6">
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="text-2xl font-bold">
                {mode === "login" ? "Welcome Back" : "Create Account"}
              </CardTitle>
              <CardDescription>
                {mode === "login"
                  ? "Sign in to your account to continue"
                  : "Fill in your details to register"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email", { required: true })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    {...register("password", { required: true })}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-pink-bg hover:bg-pink-bg/90 text-white"
                  disabled={isPending}
                >
                  {isPending
                    ? mode === "login"
                      ? "Signing in..."
                      : "Signing up..."
                    : mode === "login"
                    ? "Sign in"
                    : "Sign up"}
                </Button>

                <div className="text-center mt-2 text-sm">
                  {mode === "login" ? (
                    <p>
                      Don’t have an account?{" "}
                      <Link
                        href="/register"
                        className="text-pink-bg hover:underline"
                      >
                        Sign up
                      </Link>
                    </p>
                  ) : (
                    <p>
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="text-pink-bg hover:underline"
                      >
                        Sign in
                      </Link>
                    </p>
                  )}
                </div>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-accent px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button variant="outline" className="flex items-center gap-2">
                  <FcGoogle className="h-5 w-5" /> Google
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <FaFacebook className="h-5 w-5 text-blue-600" /> Facebook
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <FaGithub className="h-5 w-5" /> GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-center bg-accent m-4 rounded-2xl">
        <img src="/login-ill.png" alt="Auth illustration" className="mt-30" />
      </div>
    </div>
  );
}
