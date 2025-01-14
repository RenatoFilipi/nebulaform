"use client";

import EditorPreviewGroup from "./editor-preview-group";

const EditorPreview = () => {
  return (
    <div className="flex w-full flex-1 h-full">
      <span className="flex w-full h-full justify-center items-start bg-foreground/5">
        <EditorPreviewGroup />
      </span>
    </div>
  );
};

export default EditorPreview;
