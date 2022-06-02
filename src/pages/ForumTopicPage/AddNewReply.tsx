import React from "react";
import { Button } from "@mui/material";

interface Props {
  openReplyEditor: () => void;
}

const AddNewReply: React.FC<Props> = ({ openReplyEditor }) => {
  return (
    <Button
      sx={(theme) => ({ marginTop: theme.spacing(2) })}
      variant="contained"
      color="primary"
      onClick={openReplyEditor}
    >
      New reply
    </Button>
  );
};

export default AddNewReply;
