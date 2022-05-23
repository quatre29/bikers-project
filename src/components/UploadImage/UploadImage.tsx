import React, { SetStateAction } from "react";
import { Button } from "@mui/material";
import { BlogPostCreation } from "../../models/state.model";
import { UserEdit } from "../../models/user.model";

interface Props {
  setImageState:
    | React.Dispatch<SetStateAction<BlogPostCreation>>
    | React.Dispatch<SetStateAction<UserEdit>>;
  // setAvatarImageState: React.Dispatch<SetStateAction<UserEdit>>;
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
      // @ts-ignore: Parameter 'prevState' implicitly has an 'any'
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
