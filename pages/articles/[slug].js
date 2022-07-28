import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import Navbar from "../../components/Layouts/Navbar";
import NewsDetailsContent from "../../components/News/NewsDetailsContent";

const contentful = require("contentful");

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const client = contentful.createClient({
  space: publicRuntimeConfig.CONTENTFUL_SPACE_ID,
  accessToken: publicRuntimeConfig.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
    const res = await client.getEntries();

    const paths = res.items.map(item => {
        return {
            params: {
                slug: item.fields.slug
            }
        }
    })

    return {paths, fallback: false}
}

export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
      "fields.slug": params.slug,
      content_type: "blogPost",
    });
    return { props: items[0] }
}

export default function ArticleDetails({fields}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={fields.title}
        />
        <title>{fields.title} | Phish Me If You Can</title>
      </Head>
      <Navbar />
      <PageBanner
        pageTitle={fields.title}
        homePageUrl="/blog"
        homePageText="Articles"
        activePageText={fields.title}
      />
      <NewsDetailsContent fields={fields} />
      <Footer />
    </>
  );
}
