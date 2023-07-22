import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-10 backdrop-blur-lg">
      <div className="navbar max-w-[1100px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div className="flex gap-2 items-center">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle text-xl text-black"
              >
                <BiMenuAltLeft />
              </label>
              <Link
                href="/"
                className="normal-case text-xl font-bold text-white"
              >
                <span className="text-black">Md.</span>Rakib
              </Link>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 border border-gray-500/50 rounded-box w-52"
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
        </div>
        {!router.pathname.includes("blog") && (
          <div className="navbar-center hidden md:block">
            <div className="text-sm text-white uppercase flex gap-5">
              <a className="hover:underline hover:text-black" href="#about">
                About
              </a>
              <a className="hover:underline hover:text-black" href="#services">
                Services
              </a>
              <a className="hover:underline hover:text-black" href="#projects">
                Projects
              </a>
              <a className="hover:underline hover:text-black" href="#skills">
                Skills
              </a>
              <a
                className="hover:underline hover:text-black"
                href="#achivements"
              >
                Achivement
              </a>
            </div>
          </div>
        )}
        <div className="navbar-end">
          <Link href="/blog">
            <button className="btn btn-sm bg-black rounded-full flex items-center gap-2 md:mr-3">
              <span className="text-[12px] md:text-sm uppercase">
                Article blog
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
