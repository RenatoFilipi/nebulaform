"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import useEditorStore from "@/stores/editor";
import { minWidth640 } from "@/utils/constants";
import { ColorProps } from "@/utils/interfaces";
import { setState } from "@/utils/types";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../ui/drawer";

const availableColors: ColorProps[] = [
  {
    tw_class:
      "bg-slate-500 hover:bg-slate-600 text-white dark:bg-slate-800 dark:hover:bg-slate-900",
    label: "Slate",
  },
  {
    tw_class:
      "bg-gray-500 hover:bg-gray-600 text-white dark:bg-gray-800 dark:hover:bg-gray-900",
    label: "Gray",
  },
  {
    tw_class:
      "bg-zinc-500 hover:bg-zinc-600 text-white dark:bg-zinc-800 dark:hover:bg-zinc-900",
    label: "Zinc",
  },
  {
    tw_class:
      "bg-neutral-500 hover:bg-neutral-600 text-white dark:bg-neutral-800 dark:hover:bg-neutral-900",
    label: "Neutral",
  },
  {
    tw_class:
      "bg-stone-500 hover:bg-stone-600 text-white dark:bg-stone-800 dark:hover:bg-stone-900",
    label: "Stone",
  },
  {
    tw_class:
      "bg-red-500 hover:bg-red-600 text-white dark:bg-red-800 dark:hover:bg-red-900",
    label: "Red",
  },
  {
    tw_class:
      "bg-orange-500 hover:bg-orange-600 text-white dark:bg-orange-800 dark:hover:bg-orange-900",
    label: "Orange",
  },
  {
    tw_class:
      "bg-amber-500 hover:bg-amber-600 text-black dark:bg-amber-800 dark:hover:bg-amber-900",
    label: "Amber",
  },
  {
    tw_class:
      "bg-yellow-500 hover:bg-yellow-600 text-black dark:bg-yellow-800 dark:hover:bg-yellow-900",
    label: "Yellow",
  },
  {
    tw_class:
      "bg-lime-500 hover:bg-lime-600 text-black dark:bg-lime-800 dark:hover:bg-lime-900",
    label: "Lime",
  },
  {
    tw_class:
      "bg-green-500 hover:bg-green-600 text-white dark:bg-green-800 dark:hover:bg-green-900",
    label: "Green",
  },
  {
    tw_class:
      "bg-emerald-500 hover:bg-emerald-600 text-white dark:bg-emerald-800 dark:hover:bg-emerald-900",
    label: "Emerald",
  },
  {
    tw_class:
      "bg-teal-500 hover:bg-teal-600 text-white dark:bg-teal-800 dark:hover:bg-teal-900",
    label: "Teal",
  },
  {
    tw_class:
      "bg-cyan-500 hover:bg-cyan-600 text-white dark:bg-cyan-800 dark:hover:bg-cyan-900",
    label: "Cyan",
  },
  {
    tw_class:
      "bg-sky-500 hover:bg-sky-600 text-white dark:bg-sky-800 dark:hover:bg-sky-900",
    label: "Sky",
  },
  {
    tw_class:
      "bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-800 dark:hover:bg-blue-900",
    label: "Blue",
  },
  {
    tw_class:
      "bg-indigo-500 hover:bg-indigo-600 text-white dark:bg-indigo-800 dark:hover:bg-indigo-900",
    label: "Indigo",
  },
  {
    tw_class:
      "bg-violet-500 hover:bg-violet-600 text-white dark:bg-violet-800 dark:hover:bg-violet-900",
    label: "Violet",
  },
  {
    tw_class:
      "bg-purple-500 hover:bg-purple-600 text-white dark:bg-purple-800 dark:hover:bg-purple-900",
    label: "Purple",
  },
  {
    tw_class:
      "bg-fuchsia-500 hover:bg-fuchsia-600 text-white dark:bg-fuchsia-800 dark:hover:bg-fuchsia-900",
    label: "Fuchsia",
  },
  {
    tw_class:
      "bg-pink-500 hover:bg-pink-600 text-white dark:bg-pink-800 dark:hover:bg-pink-900",
    label: "Pink",
  },
  {
    tw_class:
      "bg-rose-500 hover:bg-rose-600 text-white dark:bg-rose-800 dark:hover:bg-rose-900",
    label: "Rose",
  },
];

const FormDesign = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery({ query: minWidth640 });
  const [open, setOpen] = useState(false);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="flex flex-col">
          <DialogHeader>
            <DialogTitle>Design</DialogTitle>
            <DialogDescription>
              Customize the layout and appearance of your form.
            </DialogDescription>
          </DialogHeader>
          <Body setState={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="p-3 flex flex-col gap-8">
        <DrawerHeader>
          <DrawerTitle>Design</DrawerTitle>
          <DrawerDescription>
            Customize the layout and appearance of your form.
          </DrawerDescription>
        </DrawerHeader>
        <Body setState={setOpen} />
      </DrawerContent>
    </Drawer>
  );
};

const Body = ({ setState }: { setState: setState<boolean> }) => {
  const { theme, setTheme, numericBlocks, setNumericBlock } = useEditorStore();

  return (
    <div className="flex flex-col gap-6 h-full overflow-y-auto w-full">
      <div className="flex-1 overflow-y-auto flex flex-col gap-4 w-full">
        <div className="grid gap-3 overflow-y-auto">
          <div className="flex justify-start items-center gap-2">
            <Label>Theme</Label>
          </div>
          <div className="grid sm:grid-cols-10 grid-cols-8 gap-1 overflow-y-auto ">
            {availableColors.map((color, index) => {
              return (
                <button
                  onClick={() => setTheme(color.label)}
                  key={index}
                  className={`${
                    color.label === theme && "bg-foreground/15"
                  } flex justify-center items-center rounded hover:bg-foreground/10 w-9 h-9`}>
                  <div className={`${color.tw_class} w-6 h-6 rounded`}></div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <Label>Show numeric blocks</Label>
          <Switch checked={numericBlocks} onCheckedChange={setNumericBlock} />
        </div>
      </div>
      <div className="flex justify-end items-center w-full">
        <Button
          onClick={() => setState(false)}
          variant={"outline"}
          size={"sm"}
          className="w-full sm:w-fit">
          Close
        </Button>
      </div>
    </div>
  );
};

export default FormDesign;
