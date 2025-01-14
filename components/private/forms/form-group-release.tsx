import { Button } from "@/components/ui/button";
import useSubmissionStore from "@/stores/submission";
import { ColorProps } from "@/utils/interfaces";
import { AnswerModel } from "@/utils/models";
import { twMerge } from "tailwind-merge";
import CheckBoxesDesign from "../blocks/design/checkboxes-design";
import CustomScaleDesign from "../blocks/design/custom-scale-design";
import DropdownMenuDesign from "../blocks/design/dropdown-menu-design";
import EmailAddressDesign from "../blocks/design/email-address-design";
import MultipleChoiceDesign from "../blocks/design/multiple-choice-design";
import NumberInputDesign from "../blocks/design/number-input-design";
import ParagraphTextDesign from "../blocks/design/paragraph-text-design";
import ShortTextDesign from "../blocks/design/short-text-design";
import StarRatingDesign from "../blocks/design/star-rating-design";

const design: ColorProps[] = [
  {
    label: "Slate",
    tw_class: "bg-slate-500 hover:bg-slate-600 text-white",
  },
  {
    label: "Gray",
    tw_class: "bg-gray-500 hover:bg-gray-600 text-white",
  },
  {
    label: "Zinc",
    tw_class: "bg-zinc-500 hover:bg-zinc-600 text-white",
  },
  {
    label: "Neutral",
    tw_class: "bg-neutral-500 hover:bg-neutral-600 text-white",
  },
  {
    label: "Stone",
    tw_class: "bg-stone-500 hover:bg-stone-600 text-white",
  },
  {
    label: "Red",
    tw_class: "bg-red-500 hover:bg-red-600 text-white",
  },
  {
    label: "Orange",
    tw_class: "bg-orange-500 hover:bg-orange-600 text-white",
  },
  {
    label: "Amber",
    tw_class: "bg-amber-500 hover:bg-amber-600 text-black",
  },
  {
    label: "Yellow",
    tw_class: "bg-yellow-500 hover:bg-yellow-600 text-black",
  },
  {
    label: "Lime",
    tw_class: "bg-lime-500 hover:bg-lime-600 text-black",
  },
  {
    label: "Green",
    tw_class: "bg-green-500 hover:bg-green-600 text-white",
  },
  {
    label: "Emerald",
    tw_class: "bg-emerald-500 hover:bg-emerald-600 text-white",
  },
  {
    label: "Teal",
    tw_class: "bg-teal-500 hover:bg-teal-600 text-white",
  },
  {
    label: "Cyan",
    tw_class: "bg-cyan-500 hover:bg-cyan-600 text-white",
  },
  {
    label: "Sky",
    tw_class: "bg-sky-500 hover:bg-sky-600 text-white",
  },
  {
    label: "Blue",
    tw_class: "bg-blue-500 hover:bg-blue-600 text-white",
  },
  {
    label: "Indigo",
    tw_class: "bg-indigo-500 hover:bg-indigo-600 text-white",
  },
  {
    label: "Violet",
    tw_class: "bg-violet-500 hover:bg-violet-600 text-white",
  },
  {
    label: "Purple",
    tw_class: "bg-purple-500 hover:bg-purple-600 text-white",
  },
  {
    label: "Fuchsia",
    tw_class: "bg-fuchsia-500 hover:bg-fuchsia-600 text-white",
  },
  {
    label: "Pink",
    tw_class: "bg-pink-500 hover:bg-pink-600 text-white",
  },
  {
    label: "Rose",
    tw_class: "bg-rose-500 hover:bg-rose-600 text-white",
  },
];

const FormGroupRelease = () => {
  const {
    blocks,
    theme,
    name,
    description,
    submitLabel,
    answers,
    numericBlocks,
    setAnswers,
  } = useSubmissionStore();
  const currentColor = design.find((x) => x.label === theme) ?? design[0];

  const onSubmit = () => {
    console.log(answers);
  };

  const onValueChange = (value: string, blockId: string) => {
    const updatedAnswers: AnswerModel[] = answers.map((answer) => {
      if (answer.block_id === blockId) {
        return {
          ...answer,
          answer: value,
        };
      }
      return answer;
    });
    setAnswers(updatedAnswers);
  };

  return (
    <div className="flex flex-col gap-6 h-full w-full">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{name}</h1>
        {description !== null && (
          <p className="text-sm text-foreground/80">{description}</p>
        )}
      </div>
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        {blocks.map((block) => {
          switch (block.type) {
            case "short_text":
              return (
                <ShortTextDesign
                  key={block.id}
                  block={block}
                  theme={theme}
                  numericBlocks={numericBlocks}
                  onValueChange={onValueChange}
                />
              );
            case "paragraph_text":
              return (
                <ParagraphTextDesign
                  key={block.id}
                  block={block}
                  theme={theme}
                  numericBlocks={numericBlocks}
                  onValueChange={onValueChange}
                />
              );
            case "multiple_choice":
              return (
                <MultipleChoiceDesign
                  key={block.id}
                  block={block}
                  theme={theme}
                  numericBlocks={numericBlocks}
                  onValueChange={onValueChange}
                />
              );
            case "checkboxes":
              return (
                <CheckBoxesDesign
                  key={block.id}
                  block={block}
                  theme={theme}
                  numericBlocks={numericBlocks}
                  onValueChange={onValueChange}
                />
              );
            case "dropdown_menu":
              return (
                <DropdownMenuDesign
                  key={block.id}
                  block={block}
                  theme={theme}
                  numericBlocks={numericBlocks}
                  onValueChange={onValueChange}
                />
              );
            case "number_input":
              return (
                <NumberInputDesign
                  key={block.id}
                  block={block}
                  theme={theme}
                  numericBlocks={numericBlocks}
                  onValueChange={onValueChange}
                />
              );
            case "email_address":
              return (
                <EmailAddressDesign
                  key={block.id}
                  block={block}
                  theme={theme}
                  numericBlocks={numericBlocks}
                  onValueChange={onValueChange}
                />
              );
            case "star_rating":
              return (
                <StarRatingDesign
                  key={block.id}
                  block={block}
                  numericBlocks={numericBlocks}
                  onValueChange={onValueChange}
                />
              );
            case "custom_scale":
              return (
                <CustomScaleDesign
                  key={block.id}
                  block={block}
                  theme={theme}
                  numericBlocks={numericBlocks}
                  onValueChange={onValueChange}
                />
              );
          }
        })}
      </div>
      <div className="flex w-full justify-end">
        <Button
          onClick={onSubmit}
          variant={"secondary"}
          size={"sm"}
          className={twMerge(currentColor.tw_class, "w-full sm:w-fit")}>
          {submitLabel}
        </Button>
      </div>
    </div>
  );
};

export default FormGroupRelease;
