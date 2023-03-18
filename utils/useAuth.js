import { useState, useEffect } from "react";
import { jwtVerify } from "jose";

const useAuth = async () => {
  const [isAuth, setIsAuth] = useState(false);

  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      //   Verify Token
      try {
        const secret = new TextEncoder().encode("rakib@^secret#key");
        const res = await jwtVerify(token, secret);
        const { user } = res.payload;
        if (user === "Rakib") {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (err) {
        console.log("Failed");
        setIsAuth(false);
      }
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);

  return isAuth;
};

export default useAuth;
