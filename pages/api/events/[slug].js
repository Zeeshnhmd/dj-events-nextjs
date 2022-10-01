const { events } = require("./data.json");

export default function handler(req, res) {
	/**
	 * * now if we want get a single slug and try to get it as below next.js will throw an error and POSTMAN will show slug is not defined
	 */
	// const evt = events.filter((ev) => ev.slug === slug);

	/**
	 * * and if we will do it as below we will get the results
	 * * we need to resquest the query to get that single slug
	 */

	const evt = events.filter((ev) => ev.slug === req.query.slug);
	if (req.method === "GET") {
		res.status(200).json(evt);
	} else {
		res.setHeader("Allow", ["GET"]);
		res.status(405).json({ message: `Method ${req.method} is not allowed` });
	}
}
