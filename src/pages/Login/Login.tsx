import React, { useState, useEffect } from "react";
import type { UserLogin } from "../../models/auth.model";
import {
  useLazyGetMeQuery,
  useGetUsersQuery,
  useLoginMutation,
} from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../store/auth/authSlice";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [loginDetails, setLoginDetails] = useState<UserLogin>({
    username: "quatre2",
    password: "qawsed",
  });

  const [test, setTest] = useState(false);

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
    console.log("USEEFEFECT 1------------------------1");
    if (user) {
      console.log("USEEFEFECT 2------------------------2");

      navigate("/");
    }
  }, [user]);

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
      setTest(!test);
      // setLoginDetails({ username: "", password: "" });
    }
  };
  // console.log(isLoading, "loading is loading", user);
  return (
    <div>
      <>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            value={loginDetails.username}
            onChange={(event) => handleChange(event, "username")}
          />
          <input
            type="password"
            value={loginDetails.password}
            onChange={(event) => handleChange(event, "password")}
          />

          <button type="submit">Login</button>
        </form>
        {isErrorLogin && console.log(loginError, "(*&^%%%6sada")}
        {isLoginLoading && <div>logging in...</div>}
      </>
    </div>
  );
};

export default Login;
