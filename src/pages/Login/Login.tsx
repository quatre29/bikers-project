import React from "react";
import LoginForm from "../../components/LoginForm";
import AuthLayout from "../AuthLayout";

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
