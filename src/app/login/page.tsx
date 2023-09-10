"use client";
import React, { useState, useEffect } from "react";
import axiosBase from "@/utils/axiosSetup";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { jwtVerify } from "jose";
import Link from "next/link";
import Loading from "@/components/Loading";

const page = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      //   Verify Token
      const secret = new TextEncoder().encode("rakib@^secret#key");
      const res = await jwtVerify(token, secret);
      const { user } = res.payload;
      if (user === "Rakib") {
        router.push("/dashboard");
      }
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axiosBase({
        method: "POST",
        url: "/auth/login",
        data: {
          username,
          password,
        },
      });
      const { access_token } = res.data?.data;
      if (access_token) {
        localStorage.setItem("token", access_token);
        window.location.reload();
      }
      setIsLoading(false);
    } catch (err: any) {
      let errMessage = err.response?.data?.message || "There is an error!";
      console.log("Error: ", errMessage);
      toast.error(errMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-24 layout">
      <div className="min-h-[480px]">
        <div>
          <Toaster />
          <h2 className="text-3xl mx-auto text-center py-10 font-bold mt-10">
            Admin Login
          </h2>
          <div>
            <form
              className="flex flex-col gap-3 items-center"
              onSubmit={handleLogin}
            >
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-[250px] btn btn-accent rounded-full mt-4"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
