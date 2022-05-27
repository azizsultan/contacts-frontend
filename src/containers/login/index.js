import React, { useContext } from "react";
import LoginUI from "../../layout/Login";
import useForm from "./useForm";

const LoginContainer = () => {
  console.log("login form");
  return (
    <div>
      <LoginUI form={useForm()} />
    </div>
  );
};

export default LoginContainer;
