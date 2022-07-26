import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    // const tokenString = localStorage.getItem("token");
    // const userToken = JSON.parse(tokenString);
    let cookiesArray = document.cookie.split("=");
    // console.log(cookiesArray);
    return cookiesArray[1];
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    // localStorage.setItem("token", JSON.stringify(userToken));
    document.cookie = `token=${userToken.token}`;
    setToken(userToken.token);
  };

  //   const clearToken = () => {
  //     localStorage.clear();
  //     // setToken(getToken());
  //   }

  //   console.log(token,'usetoken');
  return {
    setToken: saveToken,
    token,
    clearToken: setToken,
  };
}
