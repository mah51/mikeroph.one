import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

function SEO({ children, ...customMeta }: any) {
  const router = useRouter();
  const meta = {
    title: `Michael Hall`,
    description: `My personal website, where I test stuff and show off my projects`,
    image: `${process.env.VERCEL_URL}/profile.jpeg`,
    type: `website`,
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${process.env.VERCEL_URL}${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`${process.env.VERCEL_URL}${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Michael Hall" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        {/* <meta name="twitter:site" content="@leeerob" /> */}
        {/* <meta name="twitter:title" content={meta.title} /> */}
        {/* <meta name="twitter:description" content={meta.description} /> */}
        {/* <meta name="twitter:image" content={meta.image} /> */}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      {children}
    </>
  );
}

export default SEO;
