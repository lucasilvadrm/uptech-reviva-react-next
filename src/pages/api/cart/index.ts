import { storage } from "data/storage";
import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "types/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  
  if (req.method === 'GET') {

    // const response = await fetch('http://localhost:3004/products');
    
  }

  return res.status(200).json(storage[0]);
}