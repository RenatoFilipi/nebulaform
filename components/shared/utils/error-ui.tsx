"use client";

import { Button } from "@/components/ui/button";
import useUserStore from "@/stores/user";
import { useQuery } from "@tanstack/react-query";
import { CircleXIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ErrorUI = ({ email }: { email: string }) => {
  const t = useTranslations("app");
  const user = useUserStore();

  const query = useQuery({
    queryKey: ["errorUIData"],
    queryFn: () => {
      user.setEmail(email);
      return null;
    },
    refetchOnWindowFocus: false,
  });

  if (query.isPending) return null;

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-6 sm:px-6 lg:px-36 mt-36 w-full">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center p-2 w-fit rounded bg-primary/5">
          <CircleXIcon className="w-6 h-6 text-primary" />
        </div>
        <div className="text-center flex flex-col justify-center items-center gap-1">
          <h2 className="text-lg font-medium">{t("label_error_generic")}</h2>
          <p className="text-sm text-foreground/70">{t("desc_error_generic")}</p>
          <Button variant={"secondary"} size={"xs"} className="w-full sm:w-fit mt-4" asChild>
            <Link href={"/dashboard/forms"}>{t("label_go_home")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorUI;
