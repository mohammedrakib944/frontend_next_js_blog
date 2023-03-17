import { useState, useEffect } from "react";
import axiosBase from "./axiosSetup";
import { jwtVerify } from "jose";

const useAuth = async () => {
  const [isAuth, setIsAuth] = useState(false);

  async function checkAuth() {
    try {
      const result = await axiosBase({
        method: "POST",
        url: "/auth/refresh",
        withCredentials: true,
      });
      const { token } = result.data;

      //   Verify Token
      const secret = new TextEncoder().encode("rakib-refresh-token");
      const res = await jwtVerify(token, secret);
      const { payload } = res;
      if (payload) {
        setIsAuth(payload.token === "refresh" ? true : false);
      }
    } catch (err) {
      setIsAuth(false);
    }
  }
  useEffect(() => {
    checkAuth();
  }, []);

  return isAuth;
};

export default useAuth;
