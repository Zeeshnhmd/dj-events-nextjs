import React from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";

import Layout from "../../components/Layout/Layout";
import { API_URL } from "config";
import styles from "./events.module.css";
import Link from "next/link";
import Image from "next/image";

export default function EventPage({ events }) {
	const router = useRouter();

	const handleDelete = () => {
		console.log("item Deleted");
	};
	return (
		<Layout>
			<h1>EventPage dynamic routes</h1>
			{/* we are using here (id) in router because we have name the file (id) if we have named the file (slug) then we have used (slug) */}
			{/* <h1>{router.query.id}</h1> */}
			<div className={styles.event}>
				<div className={styles.controls}>
					<Link href={`/events/edit/${events.id}`}>
						<a className={`${styles.eventAction} ${styles.action}`}>
							<FaPencilAlt />
							Edit event
						</a>
					</Link>
					<a
						href="#"
						onClick={handleDelete}
						className={`${styles.delete} ${styles.eventAction}`}
					>
						<FaTimes /> Delete event
					</a>
				</div>
				<span>
					{events.date} at {events.time}
				</span>
				<h1>{events.name}</h1>
				{events.image && (
					<div className={styles.image}>
						<Image
							src={events.image}
							width={960}
							height={600}
							alt="event image"
						/>
					</div>
				)}
				<h3>Performers:</h3>
				<p>{events.performers}</p>
				<h3>Description:</h3>
				<p>{events.description}</p>
				<h3>Venue:</h3>
				<p>{events.address}</p>

				<Link href="/events">
					<a className={styles.back}>{"<"} Go Back</a>
				</Link>
			</div>
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
