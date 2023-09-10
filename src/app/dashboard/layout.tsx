"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtVerify } from "jose";

const layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      //   Verify Token
      const secret = new TextEncoder().encode("rakib@^secret#key");
      const res = await jwtVerify(token, secret);
      const { user } = res.payload;
      if (user !== "Rakib") {
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return <div className="max-w-[1200px] mx-auto my-20">{children}</div>;
};

export default layout;
