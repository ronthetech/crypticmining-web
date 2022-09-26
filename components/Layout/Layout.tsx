import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Cryptic Mining</title>
        <meta name="description" content="Cryptic Mining web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
