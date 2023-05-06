// components/layout.js
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="max-w-[1100px] mx-auto">
      <Navbar />
      <main>{children}</main>
      {router.pathname === "/login" ? "" : <Footer />}
    </div>
  );
}
