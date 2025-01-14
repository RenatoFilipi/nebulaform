"use client";

import useEditorStore from "@/stores/editor";
import { EBlock, EForm, ETheme } from "@/utils/entities";
import { useQuery } from "@tanstack/react-query";
import { useTransition } from "react";
import EditorPreview from "./editor-preview";
import EditorTips from "./editor-tips";
import EditorTools from "./editor-tools";

const EditorWrapper = ({
  form,
  theme,
  blocks,
}: {
  form: EForm;
  theme: ETheme;
  blocks: EBlock[];
}) => {
  const {
    setForm,
    setTheme,
    setBlocks,
    setBlocksReadyOnly,
    blocks: localBlocks,
  } = useEditorStore();
  const [isPending, startTransition] = useTransition();

  useQuery({
    queryKey: ["EditorData"],
    queryFn: () => {
      startTransition(() => {
        setForm(form);
        setTheme(theme);
        setBlocks(blocks);
        setBlocksReadyOnly(blocks);
      });
      return null;
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div className="flex flex-col relative w-full overflow-y-auto h-full flex-1 mt-14">
      <div className="flex flex-1 overflow-y-auto">
        <div className="sm:w-[380px] fixed top-0 h-screen pt-14">
          <EditorTools />
        </div>
        <div className="flex flex-1 overflow-y-auto justify-center items-center ml-[380px]">
          {!isPending && localBlocks.length <= 0 && (
            <div className="flex justify-center items-center">
              <EditorTips />
            </div>
          )}
          {!isPending && localBlocks.length >= 1 && <EditorPreview />}
        </div>
      </div>
    </div>
  );
};

export default EditorWrapper;
