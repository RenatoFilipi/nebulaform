"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { setState } from "@/helpers/types";
import { BlockProps } from "@/models/form";
import useEditorStore from "@/stores/editor";

const NumberBlock = ({
  block,
  setState,
}: {
  block: BlockProps;
  setState: setState<boolean>;
}) => {
  const { id } = block;
  const { updateBlock } = useEditorStore();

  return (
    <div className="h-full flex flex-col gap-8">
      <h1 className="text-xl font-semibold">Settings</h1>
      <div className="h-full flex flex-col gap-4 overflow-y-auto">
        <div className="grid gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            value={block.name}
            onChange={(e) => {
              updateBlock(id, { ...block, name: e.target.value });
            }}
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={block.description ?? ""}
            onChange={(e) => {
              updateBlock(id, { ...block, description: e.target.value });
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="min-character-limit">Min</Label>
            <Input
              type="number"
              id="min-character-limit"
              value={block.min_character_limit ?? 1}
              onChange={(e) => {
                updateBlock(id, {
                  ...block,
                  min_character_limit: Number(e.target.value),
                });
              }}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="max-character-limit">Max</Label>
            <Input
              type="number"
              id="max-character-limit"
              value={block.max_character_limit ?? 1}
              onChange={(e) => {
                updateBlock(id, {
                  ...block,
                  max_character_limit: Number(e.target.value),
                });
              }}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Label htmlFor="required">Required</Label>
          <Switch
            id="required"
            checked={block.required}
            onCheckedChange={(checked: boolean) => {
              updateBlock(id, { ...block, required: checked });
            }}
          />
        </div>
      </div>
      <div className="flex justify-end items-center">
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

export default NumberBlock;