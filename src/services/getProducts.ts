import { Product } from "types/product";

export const getProducts = async (): Promise<Product[]> =>
  (await fetch("http://localhost:3004/products")).json();

export const getProductById = async (id: number): Promise<Product> => {
  const products = await getProducts();

  return products.find((productItem) => productItem.id === id) as Product;
};
