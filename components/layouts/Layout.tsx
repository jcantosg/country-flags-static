import { FC } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Navbar } from "../ui";
import { useTheme, Link, Text } from "@nextui-org/react";
//import { Navbar } from "@nextui-org/react";

type Props = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Jose Cantos" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Es es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      {/* <Navbar /> */}
      <Navbar />

      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};
