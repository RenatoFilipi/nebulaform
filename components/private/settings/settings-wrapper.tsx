"use client";

import useUserStore from "@/stores/user";
import { EProfile, ESubscription } from "@/utils/entities";
import { useQuery } from "@tanstack/react-query";
import { CreditCardIcon, KeyRoundIcon, UserIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import { useState } from "react";
import SettingsAccount from "./settings-account";
import SettingsBilling from "./settings-billing";
import SettingsPassword from "./settings-password";

type TView = "account" | "billing" | "password";

const views = [
  {
    label: "Account",
    icon: UserIcon,
    view: "account",
    enabled: true,
  },
  {
    label: "Billing & Usage",
    icon: CreditCardIcon,
    view: "billing",
    enabled: true,
  },
  {
    label: "Password",
    icon: KeyRoundIcon,
    view: "password",
    enabled: true,
  },
];

const SettingsWrapper = ({
  profile,
  subscription,
  formsCount,
  submissionsCount,
  email,
}: {
  profile: EProfile;
  subscription: ESubscription;
  formsCount: number;
  submissionsCount: number;
  email: string;
}) => {
  const [resource] = useQueryState("resource");
  const [view, setView] = useState<TView>("account");
  const enabledViews = views.filter((x) => x.enabled);
  const user = useUserStore();

  const query = useQuery({
    queryKey: ["settingsData"],
    queryFn: () => {
      user.setProfile(profile);
      user.setSubscription(subscription);
      user.setFormsCount(formsCount);
      user.setSubmissionsCount(submissionsCount);
      user.setEmail(email);
      if (resource && resource === "update-password") setView("password");
      return null;
    },
    refetchOnWindowFocus: false,
  });

  if (query.isPending) return null;

  return (
    <div className="flex flex-col h-full gap-4 overflow-y-auto pb-6 pt-3 px-3 lg:px-36 sm:px-6 flex-1 mt-14">
      <div className="flex w-full h-full flex-1 relative flex-col sm:flex-row gap-4 sm:gap-0">
        <div className="flex sm:flex-col h-fit sm:w-60 gap-1 sm:fixed">
          {enabledViews.map((v) => (
            <button
              key={v.view}
              onClick={() => setView(v.view as TView)}
              className={`${
                v.view === view ? "border-foreground/30 font-medium" : "border-transparent text-foreground/70"
              } border p-2 flex items-center justify-center sm:justify-start gap-2 text-xs hover:bg-foreground/5 rounded flex-1`}>
              <v.icon className={`${v.view === view ? "text-primary" : "text-foreground/70"} w-4 h-4`} />
              {v.label}
            </button>
          ))}
        </div>
        <div className="flex w-full sm:ml-64">
          {view === "account" && <SettingsAccount />}
          {view === "billing" && <SettingsBilling />}
          {view === "password" && <SettingsPassword />}
        </div>
      </div>
    </div>
  );
};

export default SettingsWrapper;
