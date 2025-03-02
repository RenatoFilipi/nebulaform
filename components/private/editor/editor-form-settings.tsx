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
import { TSetState } from "@/utils/types";
import { BookDashedIcon, EyeIcon, GlobeIcon, Layers2Icon, MonitorOffIcon, ShieldAlertIcon } from "lucide-react";
import { useState } from "react";
import { useMedia } from "react-use";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../../ui/drawer";
import FormDelete from "../shared/form-delete";

const statusList = [
  {
    status: "draft",
    label: "Draft",
    description: `The form is being created or edited. It’s not available for users to access yet.`,
    icon: BookDashedIcon,
  },
  {
    status: "published",
    label: "Published",
    description: "The form is live and can be accessed, filled out, and submitted by users.",
    icon: GlobeIcon,
  },
  {
    status: "inactive",
    label: "Inactive",
    description: "The form is no longer available for users to fill out or submit.",
    icon: MonitorOffIcon,
  },
];

const EditorFormSettings = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMedia(minWidth640);
  const [open, setOpen] = useState(false);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="flex flex-col min-w-[650px] h-[600px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-medium">Settings</DialogTitle>
            <DialogDescription>Configure your form preferences and update settings as needed.</DialogDescription>
          </DialogHeader>
          <Body setState={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="p-3 flex flex-col max-h-[90%]">
        <DrawerHeader>
          <DrawerTitle className="text-xl font-medium">Settings</DrawerTitle>
          <DrawerDescription>Configure your form preferences and update settings as needed.</DrawerDescription>
        </DrawerHeader>
        <Body setState={setOpen} />
      </DrawerContent>
    </Drawer>
  );
};

type TView = "general" | "status" | "delete";

const views = [
  { label: "General", icon: Layers2Icon, view: "general", enabled: true },
  { label: "Status", icon: EyeIcon, view: "status", enabled: true },
  { label: "Delete", icon: ShieldAlertIcon, view: "delete", enabled: true },
];

const Body = ({ setState }: { setState: TSetState<boolean> }) => {
  const [view, setView] = useState<TView>("general");
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
          Close
        </Button>
      </div>
    </div>
  );
};

const GeneralSettings = () => {
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
    if (user.subscription.plan !== "pro") return;
    setForm({ ...form, success_title: value });
  };
  const onSetSuccessDescription = (value: string) => {
    if (user.subscription.plan !== "pro") return;
    setForm({ ...form, success_description: value });
  };
  const onSetNewSubmissionNotification = (value: boolean) => {
    setForm({ ...form, new_submission_notification: value });
  };

  return (
    <div className="flex flex-col w-full gap-6 pr-4">
      <div className="grid gap-3">
        <div className="grid gap-1">
          <Label>Name</Label>
          <p className="text-xs text-foreground/60">Provide a unique name for your form to identify it easily.</p>
        </div>
        <Input type="text" value={form.name} onChange={(e) => onSetName(e.target.value)} />
      </div>
      <div className="grid gap-3">
        <div className="grid gap-1">
          <Label>Description (Optional)</Label>
          <p className="text-xs text-foreground/60">
            Add a brief description to inform users about the purpose of this form.
          </p>
        </div>
        <Textarea value={form.description ?? ""} onChange={(e) => onSetDescription(e.target.value)} />
      </div>
      <div className="grid gap-3">
        <div className="grid gap-1">
          <Label>Submit text</Label>
          <p className="text-xs text-foreground/60">Customize the text displayed on the form&apos;s submit button.</p>
        </div>
        <Input type="text" value={form.submit_text} onChange={(e) => onSetSubmitText(e.target.value)} />
      </div>
      <div className="grid gap-3">
        <div className="grid gap-1">
          <Label>Success title</Label>
          <p className="text-xs text-foreground/60">
            Set the title that will be displayed after the form is successfully submitted.
          </p>
        </div>
        <Input type="text" value={form.success_title} onChange={(e) => onSetSuccessTitle(e.target.value)} />
      </div>
      <div className="grid gap-3">
        <div className="grid gap-1">
          <Label>Success description</Label>
          <p className="text-xs text-foreground/60">
            Enter the message that will be shown after the form is successfully submitted.
          </p>
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
              <Label>Nebulaform branding</Label>
              {user.subscription.plan !== "pro" && <Badge variant={"pink"}>Pro</Badge>}
            </div>
            <span className="text-xs text-foreground/60">Show &quot;Powered by Nebulaform&quot; on your form.</span>
          </div>
        </div>
        <Switch checked={form.nebulaform_branding} onCheckedChange={onSetNebulaformBranding} />
      </div>
    </div>
  );
};
const StatusSettings = () => {
  const { form, setForm } = useEditorStore();

  const onSetStatus = (value: string) => {
    setForm({ ...form, status: value });
  };

  return (
    <div className="flex flex-col w-full">
      <div className="grid gap-3">
        <div className="grid gap-1">
          <Label className="">Status</Label>
          <p className="text-xs text-foreground/60">
            Choose the current status of the form. This determines its availability and visibility.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 overflow-y-auto grid-cols-1">
            {statusList.map((statusItem, index) => (
              <button
                key={index}
                onClick={() => onSetStatus(statusItem.status)}
                className={`${
                  statusItem.status === form.status ? "border-primary bg-primary/5" : "hover:bg-foreground/5"
                } border p-4 flex gap-4 h-full`}>
                <div className="flex items-center justify-center">
                  <statusItem.icon
                    className={`${statusItem.status === form.status ? "text-primary" : "text-foreground/40"} w-5 h-5`}
                  />
                </div>
                <div className="flex flex-col justify-center items-start gap-1">
                  <span className="font-medium">{statusItem.label}</span>
                  <span className="text-xs text-foreground/70">{statusItem.description}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const DeleteSettings = () => {
  const { form } = useEditorStore();

  return (
    <div className="flex justify-center items-center w-full border bg-destructive/5 rounded border-destructive/50">
      <div className="flex flex-col justify-center items-center gap-4">
        <Badge variant={"destructive"} uppercase className="w-fit">
          Danger Zone
        </Badge>
        <div className="flex flex-col justify-center items-center gap-6">
          <span className="text-sm text-center font-medium">
            Permanently delete this form and all its associated data from our servers.
            <br /> This action cannot be undone.
          </span>
          <FormDelete formId={form.id} formName={form.name}>
            <Button variant={"destructive"} size={"sm"} className="w-full sm:w-fit">
              Continue
            </Button>
          </FormDelete>
        </div>
      </div>
    </div>
  );
};

export default EditorFormSettings;
