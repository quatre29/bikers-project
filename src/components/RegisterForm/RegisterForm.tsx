import React, { useState, useEffect } from "react";
import { Grid, TextField, Avatar } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useStyles from "./styles";
import { UserRegister } from "../../models/auth.model";
import { useRegisterMutation } from "../../services/authApi";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../store/auth/authSlice";
import { toast } from "react-toastify";
import LockedOutlineIcon from "@mui/icons-material/LockOutlined";

type handleChangeProperty =
  | "email"
  | "name"
  | "password"
  | "username"
  | "location";

const RegisterForm: React.FC = () => {
  const classes = useStyles();

  const [registerDetails, setRegisterDetails] = useState<UserRegister>({
    email: "",
    name: "",
    password: "",
    username: "",
  });
  const [locationDetail, setLocationDetail] = useState<{ location: string }>({
    location: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [register, { isLoading, error, isError }] = useRegisterMutation();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    if (isError) {
      toast("Something went wrong, please try again", { type: "error" });
    }
  }, [error, isError]);

  const handleChange = (
    event: React.ChangeEvent,
    property: handleChangeProperty
  ) => {
    event.preventDefault();

    setRegisterDetails((prevState) => ({
      ...prevState,
      [property]: (event.target as HTMLTextAreaElement).value,
    }));
  };

  const handleLocationChange = (event: React.ChangeEvent) => {
    event.preventDefault();
    setLocationDetail((prevState) => ({
      ...prevState,
      location: (event.target as HTMLTextAreaElement).value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const registrationForm = {
      ...registerDetails,
    };

    if (locationDetail.location.length > 1) {
      registrationForm["location"] = locationDetail.location;
    }

    const registerRes = await register(registrationForm).unwrap();

    if (registerRes.status === "success") {
      dispatch(setAuthUser(registerRes.data.user));
      toast(
        `You have successfully register as ${registerRes.data.user.username}`,
        { type: "success" }
      );
    }
  };

  return (
    <div className={classes.container}>
      <form onSubmit={(event) => handleSubmit(event)} className={classes.form}>
        <Avatar sx={{ width: 56, height: 56 }}>
          <LockedOutlineIcon />
        </Avatar>
        <TextField
          error={isError}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={registerDetails.name}
          onChange={(event) => handleChange(event, "name")}
        />

        <TextField
          error={isError}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={registerDetails.email}
          onChange={(event) => handleChange(event, "email")}
        />

        <TextField
          error={isError}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={registerDetails.username}
          onChange={(event) => handleChange(event, "username")}
        />

        <TextField
          error={isError}
          variant="outlined"
          margin="normal"
          fullWidth
          label="Location"
          name="location"
          autoComplete="location"
          autoFocus
          value={locationDetail.location}
          onChange={(event) => handleLocationChange(event)}
        />

        <TextField
          error={isError}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="password"
          label="Password"
          name="password"
          autoComplete="password"
          autoFocus
          value={registerDetails.password}
          onChange={(event) => handleChange(event, "password")}
        />

        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          loading={isLoading}
        >
          Sign up
        </LoadingButton>
      </form>
      <Grid item xs={12} className={classes.linkContainer}>
        <Link to="/login" className={classes.link}>
          Already have an account? Sign in
        </Link>
      </Grid>
    </div>
  );
};

export default RegisterForm;
