import React from "react";
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
import { TransitionProps } from "@mui/material/transitions";
import useStyles from "./styles";

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
  handleAgree: () => void;
  open: boolean;
  contentText?: string;
  title: string;
  loading?: boolean;
}

const ModalConfirmation: React.FC<Props> = ({
  handleClose,
  handleAgree,
  open,
  contentText,
  title,
  loading,
}) => {
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
        <DialogTitle>{title}</DialogTitle>
        <DialogContentText>{contentText}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleAgree}>
          Continue
        </Button>
        {loading && <CircularProgress size={30} />}
      </DialogActions>
    </Dialog>
  );
};

export default ModalConfirmation;
