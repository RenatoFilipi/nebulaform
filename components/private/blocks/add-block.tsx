"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { minWidth640 } from "@/helpers/constants";
import { uuid } from "@/helpers/functions";
import { block, setState } from "@/helpers/types";
import { BlockProps } from "@/models/form";
import useEditorStore from "@/stores/editor";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircleIcon,
  CheckSquareIcon,
  ChevronDownIcon,
  EqualIcon,
  HashIcon,
  MailIcon,
  ScaleIcon,
  StarIcon,
  TextIcon,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { z } from "zod";
import { Drawer, DrawerContent, DrawerTrigger } from "../../ui/drawer";

interface addBlockProps {
  type: block;
  name: string;
  icon: JSX.Element | null;
}
const blockList: addBlockProps[] = [
  {
    type: "short_answer",
    name: "Short answer",
    icon: <EqualIcon className="w-4 h-4" />,
  },
  {
    type: "long_answer",
    name: "Long answer",
    icon: <TextIcon className="w-4 h-4" />,
  },
  {
    type: "multiple_choice",
    name: "Multiple choice",
    icon: <CheckSquareIcon className="w-4 h-4" />,
  },
  {
    type: "checkboxes",
    name: "Checkboxes",
    icon: <CheckCircleIcon className="w-4 h-4" />,
  },
  {
    type: "dropdown",
    name: "Dropdown",
    icon: <ChevronDownIcon className="w-4 h-4" />,
  },
  { type: "number", name: "Number", icon: <HashIcon className="w-4 h-4" /> },
  { type: "email", name: "Email", icon: <MailIcon className="w-4 h-4" /> },
  { type: "rating", name: "Rating", icon: <StarIcon className="w-4 h-4" /> },
  { type: "scale", name: "Scale", icon: <ScaleIcon className="w-4 h-4" /> },
];

const AddBlock = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery({ query: minWidth640 });
  const [open, setOpen] = useState(false);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <Body setState={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="p-3">
        <Body setState={setOpen} />
      </DrawerContent>
    </Drawer>
  );
};

const Body = ({ setState }: { setState: setState<boolean> }) => {
  const { addBlock, blocks } = useEditorStore();

  const formSchema = z.object({
    block: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      block: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const blockType = values.block as block;

    const targetBlock = blockList.find((x) => x.type === blockType);
    if (targetBlock === undefined) return;

    const block: BlockProps = {
      id: uuid(),
      name: targetBlock.name,
      description: "",
      options: null,
      required: true,
      type: blockType,
      placeholder: null,
      max_character_limit: null,
      min_character_limit: null,
      show_character_limit: null,
      position: blocks.length + 1,
      max_rating: null,
      max_scale: null,
    };
    addBlock(block);
    setState(false);
  };

  return (
    <div className="flex flex-col gap-6 h-full">
      <h1 className="text-xl font-semibold">Blocks</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 h-full">
          <FormField
            control={form.control}
            name="block"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    className="grid gap-2"
                    value={field.value}
                    onValueChange={field.onChange}>
                    {blockList.map((block, index) => {
                      return (
                        <div key={index}>
                          <RadioGroupItem
                            value={block.type}
                            id={block.type}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={block.type}
                            className="text-sm cursor-pointer flex items-center justify-start gap-2 rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 [&:has([data-state=checked])]:border-primary">
                            {block.icon}
                            {block.name}
                          </Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-end items-center gap-4 sm:flex-row flex-col-reverse">
            <Button
              onClick={() => setState(false)}
              type="button"
              variant={"outline"}
              size={"sm"}
              className="w-full sm:w-fit">
              Cancel
            </Button>
            <Button
              type="submit"
              variant={"secondary"}
              size={"sm"}
              className="w-full sm:w-fit">
              Add Block
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddBlock;