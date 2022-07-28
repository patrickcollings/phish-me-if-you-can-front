import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/Faq/FaqContent';
import AskQuestionForm from '../components/Faq/AskQuestionForm';
import Footer from '../components/Layouts/Footer';

class Faq extends Component {
    render() {
        return (
          <>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <meta
                name="description"
                content="Frequently asked questions about the PhishMeIfYouCan game."
              />
              <title>FAQ | Phish Me If You Can</title>
            </Head>

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
}

export default Faq;