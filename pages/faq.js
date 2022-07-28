import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/Faq/FaqContent';
import AskQuestionForm from '../components/Faq/AskQuestionForm';
import Footer from '../components/Layouts/Footer';
import { useRouter } from 'next/router';
import { NextSeo } from "next-seo";


export default function Faq() {
    const router = useRouter();
    const canonicalUrl = (`https://www.phishmeifyoucan.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

    return (
        <>
        <NextSeo
            description="Frequently asked questions about the PhishMeIfYouCan game."
            title="FAQ | Phish Me If You Can"
            canonical={canonicalUrl}
        />

        <Navbar />
        <PageBanner
            pageTitle="Frequently Asked Questions"
            homePageUrl="/"
            homePageText="Home"
            activePageText="Frequently Asked Questions"
        />
        <FaqContent />
        <Footer />
        </>
    );
}