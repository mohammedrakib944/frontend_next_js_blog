"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-[1300px] mx-auto py-3 px-3 flex justify-between items-center">
        {/* logo */}
        <div className="text-accent text-2xl font-bold">
          <Link href="/">
            <span className="text-neutral">Md.</span>Rakib
          </Link>
        </div>
        {/* links */}
        {pathname.includes("/blog") ? (
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
        ) : (
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
            </div>
          </div>
        )}

        {/* login */}
        <Link href="#">
          <button className="btn_sm">Login</button>
        </Link>
        {/* <div className="dropdown dropdown-end dropdown-hover">
          <label tabIndex={0} className="btn_sm m-1">
            Admin
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
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
