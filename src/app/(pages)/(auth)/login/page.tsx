"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
import { useRouter } from "next/navigation";

type LoginFormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const router = useRouter();

  const onSubmit = (data: LoginFormValues) => {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4 overflow-x-auto">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side (Form) */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="relative w-full max-w-md">
          {/* Back Button */}
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
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email */}
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
                >
                  Sign in
                </Button>
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

              {/* Social Buttons */}
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

      {/* Right Side (Image) */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-accent m-4 rounded-2xl">
        <img src="/login-ill.png" alt="Login illustration" className="mt-30" />
      </div>
    </div>
  );
};

export default Login;
