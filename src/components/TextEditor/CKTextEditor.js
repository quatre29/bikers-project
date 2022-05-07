import React, { useState } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const CKTextEditor = ({ saveBodyData }) => {
  const [postBody, setPostBody] = useState("");

  const handleSave = () => {
    saveBodyData(postBody);
    console.log(postBody);
  };

  return (
    <div>
      <h2>Using CKEditor 5 from online builder in React</h2>
      <CKEditor
        editor={Editor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          setPostBody(data);
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      <button onClick={handleSave}>Post</button>
    </div>
  );
};

export default CKTextEditor;
