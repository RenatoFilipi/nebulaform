"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import useEditorStore from "@/stores/editor";
import useUserStore from "@/stores/user";
import { minWidth640 } from "@/utils/constants";
import { TFormStatus, TSetState } from "@/utils/types";
import { AlertTriangleIcon, GlobeIcon, Layers2Icon, ShieldAlertIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useMedia } from "react-use";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../../ui/drawer";
import FormStatus from "../form/form-status";
import FormDelete from "../shared/form/form-delete";

const EditorFormSettings = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("app");
  const isDesktop = useMedia(minWidth640);
  const [open, setOpen] = useState(false);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="flex flex-col min-w-[650px] h-[90%] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-medium">{t("label_settings")}</DialogTitle>
            <DialogDescription>{t("desc_settings")}</DialogDescription>
          </DialogHeader>
          <Body setState={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="p-3 flex flex-col max-h-[90%] h-full">
        <DrawerHeader>
          <DrawerTitle className="text-xl font-medium">{t("label_settings")}</DrawerTitle>
          <DrawerDescription>{t("desc_settings")}.</DrawerDescription>
        </DrawerHeader>
        <Body setState={setOpen} />
      </DrawerContent>
    </Drawer>
  );
};

type TView = "general" | "status" | "delete";

const Body = ({ setState }: { setState: TSetState<boolean> }) => {
  const t = useTranslations("app");
  const views = [
    { label: t("nav_general"), icon: Layers2Icon, view: "general", enabled: false },
    { label: t("nav_status"), icon: GlobeIcon, view: "status", enabled: true },
    { label: t("nav_delete"), icon: ShieldAlertIcon, view: "delete", enabled: true },
  ];

  const [view, setView] = useState<TView>("status");
  const enabledViews = views.filter((x) => x.enabled);

  return (
    <div className="flex flex-col gap-6 h-full overflow-y-auto pt-4 sm:pt-0">
      <div className="flex flex-col gap-4 overflow-y-auto h-full">
        <div className="flex sm:w-fit sm:gap-2 gap-1">
          {enabledViews.map((v) => {
            return (
              <button
                key={v.view}
                onClick={() => setView(v.view as TView)}
                className={`${
                  v.view === view
                    ? "border-foreground/30 text-foreground/100 font-medium"
                    : "border-transparent text-foreground/70"
                } border p-2 flex items-center justify-center gap-2 text-sm hover:bg-foreground/5 rounded flex-1`}>
                <v.icon className={`${v.view === view ? "text-primary" : "text-foreground/70"} w-4 h-4`} />
                {v.label}
              </button>
            );
          })}
        </div>
        <div className="flex w-full overflow-y-auto flex-1 h-full">
          {view === "general" && <GeneralSettings />}
          {view === "status" && <StatusSettings />}
          {view === "delete" && <DeleteSettings />}
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 flex-col sm:flex-row">
        <Button onClick={() => setState(false)} variant={"outline"} size={"sm"} className="w-full sm:w-fit">
          {t("label_close")}
        </Button>
      </div>
    </div>
  );
};

const GeneralSettings = () => {
  const t = useTranslations("app");
  const { form, setForm } = useEditorStore();
  const user = useUserStore();

  const onSetName = (value: string) => {
    setForm({ ...form, name: value });
  };
  const onSetDescription = (value: string) => {
    setForm({ ...form, description: value });
  };
  const onSetSubmitText = (value: string) => {
    setForm({ ...form, submit_text: value });
  };
  const onSetNebulaformBranding = (value: boolean) => {
    if (user.subscription.plan !== "pro") return;
    setForm({ ...form, nebulaform_branding: value });
  };
  const onSetSuccessTitle = (value: string) => {
    setForm({ ...form, success_title: value });
  };
  const onSetSuccessDescription = (value: string) => {
    setForm({ ...form, success_description: value });
  };
  const onSetNewSubmissionNotification = (value: boolean) => {
    setForm({ ...form, new_submission_notification: value });
  };

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="grid gap-3">
        <div className="grid gap-1">
          <Label>{t("label_form_name")}</Label>
          <p className="text-xs text-foreground/60">{t("desc_form_name")}</p>
        </div>
        <Input
          type="text"
          placeholder={t("placeholder_form_name")}
          value={form.name}
          onChange={(e) => onSetName(e.target.value)}
        />
      </div>
      <div className="grid gap-3">
        <div className="grid gap-1">
          <Label>
            {t("label_form_desc")} ({t("label_optional")})
          </Label>
          <p className="text-xs text-foreground/60">{t("desc_form_desc")}</p>
        </div>
        <Textarea
          placeholder={t("placeholder_form_desc")}
          value={form.description ?? ""}
          onChange={(e) => onSetDescription(e.target.value)}
        />
      </div>
      <div className="grid gap-3">
        <div className="grid gap-1">
          <Label>{t("label_submit_text")}</Label>
          <p className="text-xs text-foreground/60">{t("desc_submit_text")}</p>
        </div>
        <Input type="text" value={form.submit_text} onChange={(e) => onSetSubmitText(e.target.value)} />
      </div>
      <div className="grid gap-3">
        <div className="grid gap-1">
          <Label>{t("label_success_title")}</Label>
          <p className="text-xs text-foreground/60">{t("desc_success_title")}</p>
        </div>
        <Input type="text" value={form.success_title} onChange={(e) => onSetSuccessTitle(e.target.value)} />
      </div>
      <div className="grid gap-3">
        <div className="grid gap-1">
          <Label>{t("label_success_desc")}</Label>
          <p className="text-xs text-foreground/60">{t("desc_success_desc")}</p>
        </div>
        <Textarea value={form.success_description} onChange={(e) => onSetSuccessDescription(e.target.value)} />
      </div>
      <div className="justify-between items-center w-full hidden">
        <div className="flex justify-center items-center gap-2">
          <div className="grid gap-1">
            <div className="flex justify-start items-center gap-2">
              <Label>New submission notification</Label>
            </div>
            <span className="text-xs text-foreground/60">Receive an email whenever a new submission is received.</span>
          </div>
        </div>
        <Switch checked={form.new_submission_notification} onCheckedChange={onSetNewSubmissionNotification} />
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center gap-2">
          <div className="grid gap-1">
            <div className="flex justify-start items-center gap-2">
              <Label>{t("label_nebula_branding")}</Label>
              {user.subscription.plan !== "pro" && <Badge variant={"pink"}>Pro</Badge>}
            </div>
            <span className="text-xs text-foreground/60">{t("desc_nebula_branding")}</span>
          </div>
        </div>
        <Switch checked={form.nebulaform_branding} onCheckedChange={onSetNebulaformBranding} />
      </div>
    </div>
  );
};
const StatusSettings = () => {
  const t = useTranslations("app");
  const { form, setForm } = useEditorStore();

  const onSetStatus = (value: string) => {
    setForm({ ...form, status: value });
  };

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="space-y-1 hidden">
        <Label className="text-sm font-medium">{t("label_status")}</Label>
        <p className="text-xs text-muted-foreground">{t("desc_status")}</p>
      </div>
      <FormStatus status={form.status as TFormStatus} onStatusChange={onSetStatus} />
    </div>
  );
};
const DeleteSettings = () => {
  const t = useTranslations("app");
  const { form } = useEditorStore();

  return (
    <div className="flex justify-center items-center w-full border rounded p-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <Badge variant="destructive" className="px-3 py-1 font-medium uppercase tracking-wider flex items-center gap-2">
          <AlertTriangleIcon className="h-3.5 w-3.5" />
          {t("label_danger_zone")}
        </Badge>
        <div className="flex flex-col justify-center items-center gap-6">
          <span className="text-sm text-center font-medium">{t("desc_danger_zone")}</span>
          <FormDelete formId={form.id} formName={form.name}>
            <Button variant={"destructive"} size={"sm"} className="w-full sm:w-fit">
              {t("label_continue")}
            </Button>
          </FormDelete>
        </div>
      </div>
    </div>
  );
};
export default EditorFormSettings;
