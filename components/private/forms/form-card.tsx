"use client";

import { Badge } from "@/components/ui/badge";
import { FormProps } from "@/helpers/modules";
import { formStatus } from "@/helpers/types";
import { EditIcon, ViewIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";

const FormCard = ({ name, status, submissions, views, id }: FormProps) => {
  const submissionsDisplay = (count: number) => {
    return count === 1 ? `${count} Submission` : `${count} Submissions`;
  };
  const viewsDisplay = (count: number) => {
    return count === 1 ? `${count} View` : `${count} Views`;
  };
  const BadgeColor = (status: formStatus) => {
    switch (status) {
      case "published":
        return (
          <Badge variant={"success"} uppercase>
            {status}
          </Badge>
        );
      case "draft":
        return (
          <Badge variant={"warning"} uppercase>
            {status}
          </Badge>
        );
      case "inactive":
        return (
          <Badge variant={"default"} uppercase>
            {status}
          </Badge>
        );
    }
  };

  return (
    <Card className="flex h-28 p-4 hover:border-foreground/20 items-start flex-col justify-between shadow-none">
      <div className="flex justify-between items-center w-full">
        <span className="text-base font-semibold">{name}</span>
        {BadgeColor(status)}
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center gap-3">
          <span className="text-foreground/80 text-xs">
            {viewsDisplay(views)}
          </span>
          <span className="text-foreground/80 text-xs">
            {submissionsDisplay(submissions)}
          </span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Button variant={"outline"} size={"sm"} asChild>
            <Link href={`/dashboard/forms/${id}`}>
              <ViewIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant={"outline"} size={"sm"} asChild>
            <Link href={`/dashboard/editor/${id}`}>
              <EditIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default FormCard;