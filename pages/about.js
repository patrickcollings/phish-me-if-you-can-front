import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import About from "../components/AboutTwo/About";
import WhyChooseUs from "../components/AboutTwo/WhyChooseUs";
import Footer from "../components/Layouts/Footer";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export default function Faq() {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.phishmeifyoucan.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <>
      <NextSeo
        description="PhishMeIfYouCan is a free simulated phishing game."
        title="About | Phish Me If You Can"
        canonical={canonicalUrl}
      />

      <Navbar />
      <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
      />
      <About style={{marginBottom: '5rem'}} />
      {/* <WhyChooseUs /> */}
      {/* <MakeYourBusiness /> */}
      <Footer />
    </>
  );
}
