import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import { API_URL } from "config";

export default function EventPage({ events }) {
	const router = useRouter();
	console.log(router);

	return (
		<Layout>
			<h1>EventPage dynamic routes</h1>
			{/* we are using here (id) in router because we have name the file (id) if we have named the file (slug) then we have used (slug) */}
			{/* <h1>{router.query.id}</h1> */}
			<h1>{events.name}</h1>
		</Layout>
	);
}

/**
 * * fetching a single slug using getServerSideProps [recommended]
 */

export async function getServerSideProps({ query: { slug } }) {
	const res = await fetch(`${API_URL}/api/events/${slug}`);
	const events = await res.json();
	return { props: { events: events[0] } };
}

/**
 * * we can also fetch a single slug using getStaticPaths and getStaticProps [notRecommended]
 */

// export async function getStaticPaths() {
// 	const res = await fetch(`${API_URL}/api/events`);
// 	const staticPathsEvents = await res.json();

// 	const paths = staticPathsEvents.map((staticPathsEvent) => ({
// 		params: { slug: staticPathsEvent.slug },
// 	}));

// 	return { paths, fallback: true };
// }

// export async function getStaticProps({ params: { slug } }) {
// 	const res = await fetch(`${API_URL}/api/events/${slug}`);
// 	const staticPropsEvents = await res.json();

// 	return { props: { singleEvent: staticPropsEvents[0], revalidate: 1 } };
// }
