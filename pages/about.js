import Link from "next/link";
import React from "react";
import Layout from "../components/Layout/Layout";

const about = () => {
  return (
    <Layout title="DJ Events | About Page">
      <div>
        <h1>hello form about</h1>
        <Link href="/">Home</Link>
      </div>
    </Layout>
  );
};

export default about;
