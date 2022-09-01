import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
const about = () => {
  return (
    <>
      <Head>
        <title>about page</title>
      </Head>
      <div className={styles.main}>
        <h1>hello form about</h1>
        <Link href="/">Home</Link>
      </div>
    </>
  );
};

export default about;
