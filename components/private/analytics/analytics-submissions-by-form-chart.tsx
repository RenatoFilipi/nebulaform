import { Progress } from "@/components/ui/progress";
import useAnalyticsStore from "@/stores/analytics";
import { formatDecimal } from "@/utils/functions";
import { ISubmissionsByForm } from "@/utils/interfaces";
import { useQuery } from "@tanstack/react-query";
import { SendIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const AnalyticsSubmissionsByFormChart = () => {
  const t = useTranslations("app");
  const { submissions, forms } = useAnalyticsStore();
  const [subs, setSubs] = useState<ISubmissionsByForm[]>([]);

  const query = useQuery({
    queryKey: ["analyticsSubmissionsData"],
    queryFn: () => {
      const localSubs = forms.map((f) => {
        const count = submissions.filter((s) => s.form_id === f.id).length;
        return { count, formId: f.id, name: f.name } as ISubmissionsByForm;
      });
      setSubs(localSubs);
      return null;
    },
    refetchOnWindowFocus: false,
  });

  if (query.isPending) return null;

  return (
    <div className="flex flex-col h-full gap-8">
      <div className="flex justify-between items-center">
        <span>{t("label_submissions_by_form")}</span>
      </div>
      {subs.length <= 0 && (
        <div className="border flex justify-center items-center flex-1 rounded flex-col gap-2">
          <div className="flex justify-center items-center p-2 bg-primary/10">
            <SendIcon className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm text-foreground/70">{t("label_no_submission")}</span>
        </div>
      )}
      {subs.length >= 1 && (
        <div className="flex flex-col gap-4">
          {subs.map((sub) => {
            const percentage = (100 * sub.count) / submissions.length;
            return (
              <div key={sub.formId} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">{sub.name}</span>
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-sm">{sub.count}</span>
                    <span className="text-xs text-foreground/80">({formatDecimal(percentage, 2)}%)</span>
                  </div>
                </div>
                <Progress value={percentage} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AnalyticsSubmissionsByFormChart;
