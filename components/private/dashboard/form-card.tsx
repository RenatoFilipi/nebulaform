import FormStatusBadge from "@/components/shared/form-status-badge";
import { Card } from "@/components/ui/card";
import { EForm } from "@/utils/entities";
import { TFormStatus } from "@/utils/types";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

const FormCard = ({ form }: { form: EForm }) => {
  const { id, name, status } = form;

  return (
    <Link href={`/dashboard/forms/${id}`}>
      <Card className="flex h-44 p-4 hover:border-foreground/20 items-start flex-col justify-between shadow-none relative group hover:bg-foreground/5 transition-all">
        <div>
          <div className="flex justify-between items-start w-full flex-col gap-2">
            <span className="text-sm truncate max-w-[240px]">{name}</span>
            <FormStatusBadge status={status as TFormStatus} uppercase />
          </div>
          <ChevronRightIcon className="absolute right-4 top-4 text-foreground-lighter transition-all duration-200 group-hover:right-3 group-hover:text-foreground " />
        </div>
      </Card>
    </Link>
  );
};

export default FormCard;
