import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import NewsGridCard from "../components/News/NewsGridCard";
import Footer from "../components/Layouts/Footer";

const contentful = require("contentful");

import getConfig from "next/config";
import Head from "next/head";
const { publicRuntimeConfig } = getConfig();

const client = contentful.createClient({
  space: publicRuntimeConfig.CONTENTFUL_SPACE_ID,
  accessToken: publicRuntimeConfig.CONTENTFUL_ACCESS_TOKEN,
});

export default function Blog({entries}) {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Articles, guides and the latest news in the world of scamming and phishing."
          />
          <title>Blog | Phish Me If You Can</title>
        </Head>
        <Navbar />
        <PageBanner
          pageTitle="Blog"
          homePageUrl="/"
          homePageText="Home"
          activePageText="articles"
        />
        <NewsGridCard entries={entries} />
        <Footer />
      </>
    );
}

export async function getStaticProps() {
  const list = await client.getEntries();

  return {
    props: {
      entries: list.items,
    },
  };
}
