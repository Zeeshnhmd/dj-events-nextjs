import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./EventItem.module.css";

const EventItem = ({ event }) => {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={event.image ? event.image : "/images/event-default.png"}
          width={170}
          height={100}
          alt={event.name}
        />
      </div>
      <div className={styles.info}>
        <span>
          {event.date} at {event.time}
        </span>
        <h3>{event.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${event.slug}`}>
          <a className="btn">Details</a>
        </Link>
      </div>
    </div>
  );
};

export default EventItem;
