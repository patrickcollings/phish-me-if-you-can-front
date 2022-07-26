import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import NewsGridCard from "../components/News/NewsGridCard";
import Footer from "../components/Layouts/Footer";

const contentful = require("contentful");

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const client = contentful.createClient({
  space: publicRuntimeConfig.CONTENTFUL_SPACE_ID,
  accessToken: publicRuntimeConfig.CONTENTFUL_ACCESS_TOKEN,
});

export default function Blog({entries}) {
    return (
      <>
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
