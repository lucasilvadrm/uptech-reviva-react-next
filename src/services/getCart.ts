export const getCart = async () => {
  return (await fetch("http://localhost:3000/api/cart/getcart")).json();
};
