"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdWbSunny } from "react-icons/md";
import { jwtVerify } from "jose";

const Navbar = () => {
  const pathname = usePathname();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLight, setIsLight] = useState(false);

  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      //   Verify Token
      const secret = new TextEncoder().encode("rakib@^secret#key");
      const res = await jwtVerify(token, secret);
      const { user } = res.payload;
      if (user === "Rakib") {
        setIsValid(true);
      }
    }
  };

  const handleChangeTheme = (e: any) => {
    const theme = e.target.checked ? "daylight" : "nightdark";
    localStorage.setItem("theme", theme);
    changeTheme();
  };

  const changeTheme = () => {
    const theme: string = localStorage.getItem("theme") || "nightdark";
    if (theme === "nightdark") {
      setIsLight(false);
    } else {
      setIsLight(true);
    }
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    changeTheme();
  }, []);

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="w-full bg-base-200 fixed top-0 z-50">
      <div className="max-w-[1300px] mx-auto py-3 px-3 flex justify-between items-center">
        {/* logo */}
        <div className="text-accent text-2xl font-bold">
          <Link href="/">
            <span className="text-primary">Md.</span>Rakib
          </Link>
        </div>
        {/* links */}

        {pathname.includes("/blog") && (
          <div className="flex gap-4">
            <Link
              className="font-semibold text-sm hover:text-primary duration-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-semibold text-sm hover:text-primary duration-300"
              href="/blog"
            >
              Blog
            </Link>
          </div>
        )}

        {pathname === "/" && (
          <div className="navbar-center hidden md:block">
            <div className="text-sm flex gap-5 font-semibold">
              <a className="hover:text-primary duration-300" href="#">
                Home
              </a>
              <a className="hover:text-primary duration-300" href="#about">
                About
              </a>
              <a className="hover:text-primary duration-300" href="#projects">
                Projects
              </a>
              <a className="hover:text-primary duration-300" href="#skills">
                Skills
              </a>
              <a className="hover:text-primary duration-300" href="#contact">
                Contact
              </a>
              <Link
                className="font-semibold text-sm hover:text-primary duration-300"
                href="/blog"
              >
                Blog
              </Link>
            </div>
          </div>
        )}

        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="toggle toggle-sm"
            onChange={handleChangeTheme}
            checked={isLight}
            id="theme"
          />
          <label htmlFor="theme" className="cursor-pointer">
            <MdWbSunny />
          </label>
        </div>

        {isValid ? (
          <div className="dropdown dropdown-end dropdown-hover">
            <label tabIndex={0} className="btn_sm m-1">
              Dashboard
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Articles</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/dashboard/create">Write Article</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/login">
            <button className="btn_sm bg-base-100">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
