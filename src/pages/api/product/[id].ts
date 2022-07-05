import { storage } from "data/storage";
import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "types/product";

export default async function productHandler(
  req: NextApiRequest,
  res: NextApiResponse<Product | {}>
) {
  const {
    query: { id },
    method,
  } = req;

  if (method === "GET") {
    return res.status(200).json(storage[Number(id)]);
  }

  return res.status(404).json({ message: "error" });
}
