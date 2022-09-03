import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/404.module.css";

const NotFoundPage = () => {
  return (
    <Layout title="Page not found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h1>Sorry, there&apos;s nothing here</h1>
        <Link href="/">Go back to Home Page</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
