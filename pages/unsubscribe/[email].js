import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import About from "../../components/HomeOne/About";
import Footer from "../../components/Layouts/Footer";
import Navbar from "../../components/Layouts/Navbar";
import client from "../../utils/apollo-client";
import { unsubscribeUserQuery } from "../../utils/constants";

const Unsubscribe = () => {
  const router = useRouter();
  const { token } = router.query;

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Your account is unsubscribed"
        homePageUrl="/"
      />
      <div className="text-container ptb-100">
        <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h2 style={{ textAlign: "center" }}>Good.. Good.. Your training is complete (for now)</h2>
          <p>We are continuously improving the way in which we test users so when you come back just subscribe again and pick
            up from where you left.
          </p>
          <p>
            Just remember that every day scammers are getting smarter and smarter.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }) {
  console.log(params);

  await client.mutate({
    mutation: unsubscribeUserQuery,
    variables: {email: params.email}
  });

  return {
    props: {}
  };
}

export default Unsubscribe;
