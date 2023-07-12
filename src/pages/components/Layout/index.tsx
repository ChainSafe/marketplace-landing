import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>ChainSafe Gaming Marketplace</title>
        {/* create marketplace plausible script */}
      </Head>
    </>
  )
}