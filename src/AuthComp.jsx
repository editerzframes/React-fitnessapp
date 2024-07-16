import React from "react";
import Login from "./screens/auth/Login";
import useToken from "./components/useToken";

function AuthComp({ component }) {
  const { token, setToken, userData } = useToken();

  if (token) {
    return component;
  } else {
    return <Login />;
  }
}

export default AuthComp;
