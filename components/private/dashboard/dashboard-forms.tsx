import useDashboardStore from "@/stores/dashboard";
import { LayersIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import DashboardFormCard from "./dashboard-form-card";

const DashboardForms = () => {
  const dashboard = useDashboardStore();
  const t = useTranslations("app");

  if (dashboard.forms.length === 0) {
    return (
      <div className="flex justify-center items-center h-full flex-1 flex-col gap-4">
        <div className="border pb-20 flex flex-col justify-center items-center gap-6 border-none">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex justify-center items-center p-2 bg-foreground/5 rounded">
              <LayersIcon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex justify-center items-center flex-col">
              <span className="text-lg font-medium">{t("label_no_forms")}</span>
              <span className="text-sm text-center text-foreground/70">{t("desc_no_forms")}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-y-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {dashboard.forms.map((form) => (
        <DashboardFormCard key={form.id} form={form} />
      ))}
    </div>
  );
};

export default DashboardForms;
