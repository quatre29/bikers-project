import React, { SetStateAction } from "react";
import { Button } from "@mui/material";
import { BlogPostCreation } from "../../models/state.model";

interface Props {
  setImageState: React.Dispatch<SetStateAction<BlogPostCreation>>;
  type: "post_banner" | "avatar";
}

const UploadImage: React.FC<Props> = ({ setImageState, type }) => {
  const hanleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   @ts-ignore: Object is possibly 'null'.
    const file = event.target.files[0];
    previewFile(file);
  };

  const previewFile = (file: File) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImageState((prevState) => ({
        ...prevState,
        [type]: reader.result,
      }));
    };
  };

  return (
    <Button variant="outlined" color="primary" component="label">
      upload image
      <input
        accept=".png, .jpg, .jpeg"
        type="file"
        name={type}
        onChange={hanleFileInputChange}
        hidden
      />
    </Button>
  );
};

export default UploadImage;
