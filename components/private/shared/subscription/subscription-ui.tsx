"use client";

import { Button } from "@/components/ui/button";
import useUserStore from "@/stores/user";
import { EProfile, ESubscription } from "@/utils/entities";
import { useQuery } from "@tanstack/react-query";
import { WalletIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import ManageSubscription from "./manage-subscription";

const SubscriptionUI = ({
  email,
  locale,
  profile,
  subscription,
}: {
  email: string;
  locale: string;
  profile: EProfile;
  subscription: ESubscription;
}) => {
  const t = useTranslations("app");
  const user = useUserStore();

  const query = useQuery({
    queryKey: ["subscriptionUIData"],
    queryFn: () => {
      user.setLocale(locale);
      user.setEmail(email);
      user.setProfile(profile);
      user.setSubscription(subscription);
      return null;
    },
    refetchOnWindowFocus: false,
  });

  if (query.isPending) return null;

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-6 sm:px-6 lg:px-36 mt-36 w-full">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center p-2 w-fit rounded bg-primary/10">
          <WalletIcon className="w-6 h-6 text-primary" />
        </div>
        <div className="text-center flex flex-col justify-center items-center gap-6">
          <div className="text-center flex flex-col justify-center items-center gap-1">
            <h2 className="text-lg font-medium">{t("label_upgrade_sub")}</h2>
            <p className="text-sm text-foreground/70">{t("desc_upgrade_sub")}</p>
          </div>
          <div className="flex justify-center items-center w-fit">
            <ManageSubscription>
              <Button variant={"secondary"} size={"xs"}>
                {t("label_manage_sub")}
              </Button>
            </ManageSubscription>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionUI;
