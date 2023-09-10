"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtVerify } from "jose";
import Loading from "@/components/Loading";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [isChecking, setIsChecking] = useState(false);
  const router = useRouter();

  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsChecking(true);
      //   Verify Token
      const secret = new TextEncoder().encode("rakib@^secret#key");
      const res = await jwtVerify(token, secret);
      const { user } = res.payload;
      if (user !== "Rakib") {
        router.push("/login");
      }
      setIsChecking(false);
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (isChecking)
    return (
      <div className="mt-20">
        <Loading title="Auth checking..." />
      </div>
    );

  return <div className="max-w-[1200px] mx-auto my-20">{children}</div>;
};

export default layout;
