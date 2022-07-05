import { useEffect } from "react";
import ContainerProductDetails from "modules/DetailsProduct";
import { GetStaticProps } from "next";
import { storage } from "data/storage";
import { Product } from "types/product";
import { useRouter } from "next/router";
import { getProductById, getProducts } from "services/getProducts";

interface Props {
  product: Product;
  products: Product[];
}

const DetailsPage = ({ product, products }: Props) => {
  const { isFallback } = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  if (isFallback) {
    return <div>Carregando...</div>;
  }

  return <ContainerProductDetails product={product} products={products} />;
};

export default DetailsPage;

export async function getStaticPaths() {
  const products = await getProducts();

  const paths = products.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  const products = await getProducts();

  const product = await getProductById(Number(id));

  return {
    props: {
      product,
      products,
    },
  };
};
