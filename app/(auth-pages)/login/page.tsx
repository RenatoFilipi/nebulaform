import Brand from "@/components/core/brand";
import LoginForm from "@/components/public/auth/login-form";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 sm:flex hidden w-full relative bg-gradient-to-b from-black to-primary">
        <Brand
          type="logo_text"
          className="h-8 fill-white absolute top-6 left-6"
        />
      </div>
      <div className="flex-1 flex justify-center items-center w-full relative">
        <Link href={"/"} className="fixed top-6 flex sm:hidden">
          <Brand type="logo" className="h-8 fill-foreground" />
        </Link>
        <div className="absolute top-3 left-3 hidden sm:flex gap-2 justify-between items-center">
          <Button variant={"ghost"} size={"sm"} asChild>
            <Link href={"/"}>
              <ChevronLeftIcon className="w-4 h-4 mr-" />
              Go back
            </Link>
          </Button>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col items-center justify-center w-full sm:max-w-96 gap-6 sm:p-0 px-12">
            <div className="flex justify-start w-full flex-col gap-1">
              <h1 className="text-xl font-medium">Login</h1>
              <span className="text-sm text-foreground/80">
                Don&apos;t have an account?{" "}
                <Link
                  href={"/signup"}
                  className="hover:underline text-info dark:text-blue-500">
                  Sign up
                </Link>
              </span>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
