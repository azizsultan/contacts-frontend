import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/Provider";

const LoginContainer = () => {
  const {
    authState: {
      auth: { data }
    }
  } = useContext(GlobalContext);
  console.log(data);
  return (
    <div>
      <h1>{data ? `Welcome ${data.username}` : "Login Here"}</h1>
      <Link to="/auth/register">Register</Link>
    </div>
  );
};

export default LoginContainer;
