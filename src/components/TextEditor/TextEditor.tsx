import React, { useState, useRef, useEffect, Dispatch } from "react";
import { Box } from "@mui/material";
import { BlogPostCreation } from "../../models/state.model";
import { Editor } from "@tinymce/tinymce-react";

interface Props {
  saveBodyData: (data: string) => void;
  isLoading: boolean;
}

const TextEditor: React.FC<Props> = ({ saveBodyData, isLoading }) => {
  const editorRef = useRef<any>(null);

  const log = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      console.log(content, "content");

      saveBodyData(content);
    }
  };

  return (
    <>
      <Editor
        apiKey="6xa942bzxudtaaubf77g772z6thuetqw2ltdt987lecnm94u"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
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
      <button onClick={log}>Post</button>
      {isLoading && <div>Creating post...</div>}
    </>
  );
};

export default TextEditor;
