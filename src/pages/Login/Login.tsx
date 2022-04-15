import React, { useState } from "react";
import { useGetUserByIdQuery, useLoginMutation } from "../../services/authApi";

const Login: React.FC = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "quatre2",
    password: "qawsed",
  });

  const [login] = useLoginMutation();

  const { data, error, isLoading, isFetching, isSuccess } =
    useGetUserByIdQuery("5");

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

    await login(loginDetails);
    // setLoginDetails({ username: "", password: "" });
  };

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

        {isLoading && <h2>Loading...</h2>}
        {error && <h2>Something went wrong</h2>}
        {error && console.log(error)}

        {isSuccess && console.log(data, "====")}
      </>
    </div>
  );
};

export default Login;
