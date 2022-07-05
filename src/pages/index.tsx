import type { GetStaticProps, NextPage } from "next";
import ContainerHome from "modules/HomePage";
import { Product } from "types/product";
import { getProducts } from "services/getProducts";
import { useEffect, useState } from "react";

interface HomePageProps {
  products: Product[];
}

const HomePage: NextPage<HomePageProps> = ({ products }: HomePageProps) => {
  
  // const [products, setProducts] = useState<Product[]>([]);

  // const data = await getProducts();

  // console.log(products);

  // useEffect(() => {
  //   setProducts(data)
  // }, [])

  return <ContainerHome products={products} />;
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const products = await getProducts();

  // console.log(typeof products);

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24,
  };
};
