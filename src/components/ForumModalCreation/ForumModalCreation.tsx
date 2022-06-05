import React, { useState } from "react";
import useStyles from "./styles";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Slide,
  Button,
  CircularProgress,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  handleClose: () => void;
  open: boolean;
}

const ForumModalCreation: React.FC<Props> = ({ handleClose, open }) => {
  const classes = useStyles();

  return (
    <Dialog
      maxWidth="lg"
      open={open}
      BackdropProps={{
        classes: {
          root: classes.backDrop,
        },
      }}
      keepMounted
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <DialogContent>
        <DialogTitle>Title</DialogTitle>
        <DialogContentText>Context</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={handleClose}>
          Cancel
        </Button>

        {/* <LoadingButton
          loading={loading}
          loadingPosition="end"
          variant="contained"
          color="primary"
          onClick={handleAgree}
        >
          Continue
        </LoadingButton> */}
      </DialogActions>
    </Dialog>
  );
};

export default ForumModalCreation;
