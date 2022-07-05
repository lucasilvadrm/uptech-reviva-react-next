import { Product } from "types/product";

const getProducts = async (): Promise<Product[]> =>
  (await fetch("http://localhost:3004/products")).json();

export default getProducts;
