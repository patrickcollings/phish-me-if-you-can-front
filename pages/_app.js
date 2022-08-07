import '../styles/bootstrap.min.css';
import 'animate.css'
import '../styles/boxicons.min.css';
import '../styles/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../styles/style.css';
import '../styles/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';
import client from '../utils/apollo-client';
import { ApolloProvider } from "@apollo/client";
import Script from "next/script";

export default class MyApp extends App {

    // Preloader
    state = {
        loading: false
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
          <>
            <ApolloProvider client={client}>
              <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
              />

              <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
              </Script>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                />
                <meta
                  name="description"
                  content="Free Phishing Simulated Game using real email scams. Become more aware of scammers."
                />
                <link rel="canonical" href="https://www.phishmeifyoucan.com" />
                <title>Phish Me If You Can - Phishing Simulator</title>
              </Head>

              <Component {...pageProps} />

              {/* Preloader */}
              <Loader loading={this.state.loading} />

              {/* Go Top Button */}
              <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </ApolloProvider>
          </>
        );
    }
}