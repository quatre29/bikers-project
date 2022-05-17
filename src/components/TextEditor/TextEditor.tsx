import React, { useState, useRef, useEffect, Dispatch } from "react";
import { Box, Button } from "@mui/material";
import { BlogPostCreation } from "../../models/state.model";
import { Editor } from "@tinymce/tinymce-react";

interface Props {
  saveBodyData: (data: string) => void;
  cancelEdit?: () => void;
  isLoading: boolean;
  edit?: boolean;
  initialValue: string;
}

const TextEditor: React.FC<Props> = ({
  saveBodyData,
  isLoading,
  edit,
  initialValue,
  cancelEdit,
}) => {
  const editorRef = useRef<any>(null);

  const log = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();

      saveBodyData(content);
    }
  };

  return (
    <>
      <Editor
        apiKey="6xa942bzxudtaaubf77g772z6thuetqw2ltdt987lecnm94u"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "emoticons",
            "lists",
            "link",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor emoticons | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          //   content_style:
          //     "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <Box sx={(theme) => ({ marginTop: theme.spacing(4) })}>
        <Button variant="contained" color="primary" onClick={log}>
          {edit ? "Save changes" : "Post"}
        </Button>
        {edit && cancelEdit && (
          <Button variant="text" color="error" onClick={cancelEdit}>
            Cancel
          </Button>
        )}
        {isLoading && <div>Creating post...</div>}
      </Box>
    </>
  );
};

export default TextEditor;
