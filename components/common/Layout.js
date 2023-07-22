// components/layout.js
import Footer from "./Footer";
import { useRouter } from "next/router";
import ParticlesWrapper from "./ParticlesWrapper";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div>
      <ParticlesWrapper />
      <div className="max-w-[1100px] mx-auto">
        <main>{children}</main>
      </div>
      {router.pathname === "/login" ? "" : <Footer />}
    </div>
  );
}
