import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";

interface Props {
  saveBodyData: (data: string) => void;
  isLoading: boolean;
}

const CommentTextEditor: React.FC<Props> = ({ saveBodyData, isLoading }) => {
  const editorRef = useRef<any>(null);

  const log = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      if (content.length < 1) {
        toast(
          "Comment cannot be empty, please write something before posting",
          { type: "warning" }
        );
        return;
      }
      editorRef.current.resetContent();
      saveBodyData(content);
    }
  };

  return (
    <>
      <Editor
        apiKey="6xa942bzxudtaaubf77g772z6thuetqw2ltdt987lecnm94u"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 200,
          menubar: false,
          plugins: ["autolink", "emoticons", "link", "wordcount"],
          toolbar: "bold italic forecolor emoticons",

          //   content_style:
          //     "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Post</button>
      {isLoading && <div>Creating post...</div>}
    </>
  );
};

export default CommentTextEditor;
