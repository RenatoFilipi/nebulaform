"use client";

import Brand from "@/components/core/brand";
import ResetPasswordForm from "@/components/public/auth/reset-password-form";
import AuthPanel from "@/components/public/landing/auth-panel";
import Link from "next/link";
import { Suspense } from "react";

const Reset = () => {
  return (
    <div className="min-h-screen flex">
      <AuthPanel />
      <div className="flex-1 flex justify-center items-center w-full relative">
        <Link href={"/"} className="fixed top-6 flex sm:hidden">
          <Brand type="logo" className="h-8 fill-foreground" />
        </Link>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col items-center justify-center w-full sm:max-w-[450px] gap-6 sm:p-0 px-12">
            <Suspense>
              <ResetPasswordForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
