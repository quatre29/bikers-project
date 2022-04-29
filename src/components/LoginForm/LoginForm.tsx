import React, { useState, useEffect } from "react";
import type { UserLogin } from "../../models/auth.model";
import { useLazyGetMeQuery, useLoginMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../store/auth/authSlice";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { TextField } from "@mui/material";
import LockedOutlineIcon from "@mui/icons-material/LockOutlined";
import useStyles from "./styles";
import { Grid, Avatar } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const classes = useStyles();

  const [loginDetails, setLoginDetails] = useState<UserLogin>({
    username: "quatre2",
    password: "qawsed",
  });

  const [
    login,
    {
      data: loginData,
      isError: isErrorLogin,
      error: loginError,
      isLoading: isLoginLoading,
    },
  ] = useLoginMutation();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    if (isErrorLogin) {
      toast("User details do not match, please try again", { type: "warning" });
    }
  }, [loginError, isErrorLogin]);

  const handleChange = (
    event: React.ChangeEvent,
    property: "username" | "password"
  ) => {
    event.preventDefault();

    setLoginDetails((prevState) => ({
      ...prevState,
      [property]: (event.target as HTMLTextAreaElement).value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginRes = await login(loginDetails).unwrap();
    if (loginRes.status === "success") {
      dispatch(setAuthUser(loginRes.data.user));
      toast(
        `You have successfully logged in as ${loginRes.data.user.username}`,
        {
          type: "success",
        }
      );
      // setLoginDetails({ username: "", password: "" });
    }
  };

  return (
    <div className={classes.container}>
      <>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className={classes.form}
        >
          <Avatar sx={{ width: 56, height: 56 }}>
            <LockedOutlineIcon />
          </Avatar>
          <TextField
            variant="outlined"
            margin="normal"
            error={isErrorLogin}
            required
            fullWidth
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={loginDetails.username}
            onChange={(event) => handleChange(event, "username")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            error={isErrorLogin}
            required
            fullWidth
            type="password"
            label="Password"
            name="password"
            autoComplete="password"
            autoFocus
            value={loginDetails.password}
            onChange={(event) => handleChange(event, "password")}
          />

          <LoadingButton
            loading={isLoginLoading}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign in
          </LoadingButton>
        </form>
        <Grid item xs={12} className={classes.linkContainer}>
          <Link to="/register" className={classes.link}>
            You don't have an account? Sign Up
          </Link>
        </Grid>
        {/* <button onClick={sendToast}>send toast</button> */}
      </>
    </div>
  );
};

export default LoginForm;
