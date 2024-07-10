// /api/all.js

import connectDb from "../../utils/database";

export default async function handler(req, res) {
  await connectDb();

  res.status(200).json({ message: "Hello, World1!" });
}
