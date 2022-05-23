import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Typography,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CustomPaper from "../../components/CustomPaper";
import { User, UserEdit } from "../../models/user.model";
import { LockOutlined } from "@mui/icons-material";
import UploadImage from "../../components/UploadImage";
import { deepOrange } from "@mui/material/colors";
import { useUpdateMeMutation } from "../../services/authApi";
import { toast } from "react-toastify";

interface Props {
  user: User | null;
}

const ProfileTab: React.FC<Props> = ({ user }) => {
  const [me, setMe] = useState<UserEdit>({
    name: "",
    avatar: "",
    description: "",
    location: "",
    email: "",
  });

  const [updateMe, { isLoading, isError, isSuccess }] = useUpdateMeMutation();
  const [buttonState, setButtonState] = useState("primary");

  useEffect(() => {
    if (user) {
      setMe({
        name: user.name,
        avatar: user.avatar,
        location: user.location,
        description: user.description ? user.description : "",
        email: user.email,
      });
    }
  }, [user]);

  useEffect(() => {
    if (isError) {
      toast("Something went wrong, please try again", { type: "error" });
      setButtonState("error");
    }

    if (isSuccess) {
      toast("User details updated", { type: "success" });
      setButtonState("success");
    }
  }, [isError, isSuccess, isLoading]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMe({
      ...me,
      [e.target.name]: e.target.value,
    });
  };

  const submitChanges = () => {
    updateMe(me);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <CustomPaper>
          <Typography
            variant="h5"
            sx={(theme) => ({
              marginBottom: theme.spacing(2),
            })}
          >
            User info
          </Typography>
          <TextField
            fullWidth
            label="Name"
            name="name"
            onChange={onChange}
            value={me.name}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            onChange={onChange}
            value={me.email}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            onChange={onChange}
            value={me.description}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Location"
            name="location"
            onChange={onChange}
            value={me.location}
            margin="normal"
          />

          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: theme.spacing(4),
            })}
          >
            <Avatar
              src={me.avatar && me.avatar}
              sx={(theme) => ({
                height: 80,
                width: 80,
                backgroundColor: deepOrange[500],
                marginRight: theme.spacing(4),
              })}
            >
              <LockOutlined />
            </Avatar>
            <UploadImage setImageState={setMe} type="avatar" />
          </Box>
        </CustomPaper>
      </Grid>
      <Box
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          marginTop: theme.spacing(4),
        })}
      >
        <LoadingButton
          loading={isLoading}
          loadingPosition="end"
          fullWidth
          variant="contained"
          //@ts-ignore
          color={buttonState}
          onClick={submitChanges}
        >
          Save changes
        </LoadingButton>
      </Box>
    </Grid>
  );
};

export default ProfileTab;
