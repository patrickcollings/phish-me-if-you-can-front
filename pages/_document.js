import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
          <Html lang="en-gb">
            <Head>
              <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&display=swap"
                rel="stylesheet"
              />
              <link
                href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap"
                rel="stylesheet"
              />
              <link rel="icon" href="/images/favicon.ico"></link>
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        );
    }
}

export default MyDocument;