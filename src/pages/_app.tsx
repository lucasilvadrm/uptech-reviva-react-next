import { CartProvider } from "contexts/CartContext";
import { ProductProvider } from "contexts/ProductsContext";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Reviva Fashion</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}

export default MyApp;
