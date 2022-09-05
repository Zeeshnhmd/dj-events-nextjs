import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout/Layout";
import { API_URL } from "config";
import Link from "next/link";

export default function Home({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h1>No events to show</h1>}

      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
      {events.length > 2 && (
        <Link href="/events">
          <a className="btn-secondary">View all Events</a>
        </Link>
      )}
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

  return { props: { events: events.slice(0, 3) }, revalidate: 1 };

  /**
   * * here we have called a method slice to get only three items in the home page
   *  * here what revalidate will do is that if it will find the request it request again after 1sec
   */
}

/**
 * * getServerSideProps run every time when we visit the page
 * * getStaticProps runs on build time but we can also pass some options with props (revalidate, fallback) inside the return object
 */
