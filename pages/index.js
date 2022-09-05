import Layout from "@/components/Layout/Layout";
import { API_URL } from "config";

export default function Home({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/events`);
//   const events = await res.json();

//   console.log(events);

//   return { props: { events } };
// }

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  console.log(events);

  return { props: { events }, revalidate: 1 };

  /**
   * * here what revalidate will do is that if it will find the request it request again after 1sec
   */
}

/**
 * * getServerSideProps run every time when we visit the page
 * * getStaticProps runs on build time but we can also pass some options with props (revalidate, fallback) inside the return object
 */
