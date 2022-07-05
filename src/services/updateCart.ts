import { Product } from "types/product";

export const updateCart = async (cart: Product[]) => {
  return await fetch("http://localhost:3000/api/cart/setcart", {
    method: "POST",
    body: JSON.stringify(cart),
  });
};
