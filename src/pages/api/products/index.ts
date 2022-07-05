import { storage } from "data/storage";
import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "types/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | {}>
) {
  // const { method } = req;

  // if (method === "GET") {
  //   // const ret = await fetch("http://localhost:3004/products")
  //   return res.status(200).json(storage);
  // }

  // return res.status(404).json({ message: "rota não encontrada!" });
}

// import { Product } from "types/product";

// export const getProducts = async (): Promise<Product[]> =>
//   (await fetch("http://localhost:3004/products")).json();

// export const getProductById = async (id: number): Promise<Product> => {
//   const products = await getProducts();

//   return products.find((productItem) => productItem.id === id) as Product;
// };
