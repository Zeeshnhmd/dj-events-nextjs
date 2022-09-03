import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.layout}>
        <Header />
        <div className={styles.container}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the hottiest parties",
  description: "Find the latest DJ and other musical events",
  keywords: "musics, dj, edm, events",
};
