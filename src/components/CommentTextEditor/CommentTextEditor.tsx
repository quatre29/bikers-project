import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";
import { Button, Box } from "@mui/material";

interface Props {
  saveBodyData: (data: string) => void;
  cancelEdit?: () => void;
  isLoading: boolean;
  initialValue?: string;
  edit?: boolean;
}

const CommentTextEditor: React.FC<Props> = ({
  saveBodyData,
  isLoading,
  initialValue = "",
  edit,
  cancelEdit,
}) => {
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
        initialValue={initialValue}
        init={{
          height: 200,
          menubar: false,
          plugins: ["autolink", "emoticons", "link", "wordcount"],
          toolbar: "bold italic forecolor emoticons",

          //   content_style:
          //     "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <Box sx={(theme) => ({ marginTop: theme.spacing(2) })}>
        <Button variant="contained" color="primary" onClick={log}>
          {edit ? "Save changes" : "Post"}
        </Button>
        {edit && (
          <Button variant="text" color="error" onClick={cancelEdit}>
            Cancel
          </Button>
        )}
        {isLoading && <div>Creating post...</div>}
      </Box>
    </>
  );
};

export default CommentTextEditor;
