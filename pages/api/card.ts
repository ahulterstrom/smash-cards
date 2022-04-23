import { updateCard } from "../../services";

// @ts-ignore
export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    // console.log("recieved POST in req", req.body);

    await updateCard(req.body);

    res.status(200).json({ name: "John Doe" });
  } else {
    // Handle any other HTTP method
    res.status(404).end();
  }
}
