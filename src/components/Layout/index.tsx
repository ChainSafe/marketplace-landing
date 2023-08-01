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
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content="Build on Sygma's cross-chain infrastructure with our TypeScript SDK
            for seamless communication across EVM, Substrate, Cosmos and more."
        />
        {/*<!-- OG Meta Tags -->*/}
        <meta
          property='og:url'
          content='https://buildwithsygma.com/'
          key='ogurl'
        />
        <meta
          property='og:image'
          content='https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/73764230-eea4-4d79-71a7-721a06a87e00/public'
          key='ogimage'
        />
        <meta
          property='og:site_name'
          content='ChainSafe Gaming Marketplace'
          key='ogsitename'
        />
        <meta
          property='og:title'
          content='Gaming-focussed NFT marketplace | ChainSafe Gaming'
          key='ogtitle'
        />
        {/*<!-- need to update description -->*/}
        {/* <meta
          property='og:description'
          content=""
          key='ogdesc'
        /> */}
        {/*<!-- Twitter Meta Tags -->*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@ChainSafeth' />
        <meta
          name='twitter:title'
          content='The interoperability layer for building cross-blockchain
            applications'
        />
        {/* <meta
          name='twitter:description'
          content=""
        /> */}
        <meta
          name='twitter:image'
          content='https://imagedelivery.net/qdx9xDn6TxxInQGWsuRsVg/73764230-eea4-4d79-71a7-721a06a87e00/public'
        />
        <script
          defer
          data-domain='marketplace.chainsafe.io'
          src='https://plausible.io/js/script.outbound-links.js'></script>
      </Head>
    </>
  );
}