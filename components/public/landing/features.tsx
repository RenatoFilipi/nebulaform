"use client";

import { Badge } from "@/components/ui/badge";
import { BarChartIcon, BlocksIcon, DatabaseIcon, HexagonIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const Features = () => {
  const t = useTranslations("landing");
  const features = [
    {
      title: t("feat1_headline"),
      description: t("feat1_subheadline"),
      icon: BlocksIcon,
    },
    {
      title: t("feat2_headline"),
      description: t("feat2_subheadline"),
      icon: BarChartIcon,
    },
    {
      title: t("feat3_headline"),
      description: t("feat3_subheadline"),
      icon: DatabaseIcon,
    },
    {
      title: t("feat4_headline"),
      description: t("feat4_subheadline"),
      icon: HexagonIcon,
    },
  ];

  return (
    <section
      id="features"
      className="py-12 sm:py-16 lg:py-20 px-8 sm:px-0 sm:min-h-dvh flex justify-center items-center">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 grid gap-4">
        <div className="text-center flex flex-col justify-center items-center gap-4">
          <Badge uppercase variant={"primary"}>
            {t("nav_features")}
          </Badge>
          <h2 className="text-2xl font-bold leading-tight sm:text-4xl">{t("feat_headline")}</h2>
          <p className="text-lg text-foreground/70">{t("feat_subheadline")}</p>
        </div>
        <div className="grid grid-cols-1 mt-10 gap-6 sm:grid-cols-2 sm:mt-16 xl:mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 transition-shadow bg-background border rounded-lg hover:border-primary hover:bg-primary/5 gap-2">
              <div className="flex justify-center flex-col items-start gap-3">
                <div className="flex justify-center items-center p-2 rounded bg-primary/10">
                  <feature.icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-start">{feature.title}</h3>
              </div>
              <p className="text-sm text-foreground/70 text-start">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
