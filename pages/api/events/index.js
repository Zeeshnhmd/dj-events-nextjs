// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { events } = require("./data.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(events);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}

/**
 * * their is a catch here if go to postman and test it for any method (GET, POST, PUT, PATCH, DELETE, etc.) it will show us the same response
 * * but what if want to limit the response to (GET) only
 * * we can do it req and it methods
 */
