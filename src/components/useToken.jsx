import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("data");
    const userToken = JSON.parse(tokenString);
    return userToken?.token?.access_token;
  };
  
  const getUserData = () => {
    const dataString = localStorage.getItem("data");
    return JSON.parse(dataString);
  };
  
  const [token, setToken] = useState(getToken());
  const [userData, setUserData] = useState(getUserData());

  const saveToken = userToken => {
    localStorage.setItem('data', JSON.stringify(userToken.data));
    setToken(userToken.data.token.access_token);
    setUserData(userToken.data);
  };

  return {
    setToken: saveToken,
    token,
    userData
  }

}
