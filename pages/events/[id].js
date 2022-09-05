import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";

export default function EventPage() {
  const router = useRouter();

  return (
    <Layout>
      <h1>EventPage dynamic routes</h1>
      {/* we are using here (id) in router because we have name the file (id) if we have named the file (slug) then we have used (slug) */}
      <h1>{router.query.id}</h1>
      <button onClick={() => router.push("/")}>click</button>
    </Layout>
  );
}
