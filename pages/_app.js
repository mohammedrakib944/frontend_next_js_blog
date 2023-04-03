import "@/styles/globals.css";
import Layout from "@/components/common/Layout";
import { ContextProdiver } from "@/context/context";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import useAuth from "@/utils/useAuth";

export default function App({ Component, pageProps }) {
  const isAuth = useAuth();
  const router = useRouter();

  const checkAuth = async () => {
    if (router.pathname.includes("dashboard")) {
      if (!(await isAuth)) {
        router.push("/login");
      }
    }
  };

  checkAuth();

  return (
    <>
      <ContextProdiver>
        <NextNProgress color="#14bf09" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProdiver>
    </>
  );
}
