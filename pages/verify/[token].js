import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import About from "../../components/HomeOne/About";
import Footer from "../../components/Layouts/Footer";
import Navbar from "../../components/Layouts/Navbar";
import client from "../../utils/apollo-client";
import { verifyUserQuery } from "../../utils/constants";

const Verify = () => {
  const router = useRouter();
  const { token } = router.query;

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Your account is verified!"
        homePageUrl="/"
      />
      <div className="text-container ptb-100">
        <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h2 style={{ textAlign: "center" }}>What happens now?</h2>

          <p>
            That's it! We will periodically send you phishing emails and then at
            the end of every month you will receive a report and score directly
            to your inbox.
          </p>

          <h3>3 simple tips</h3>
          <ol>
            <li>Always check the email address of the sender</li>
            <li>If it seems too good to be true then it probably is</li>
            <li>If you are unsure go directly to a website and do NOT click any links</li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps({ params }) {
  console.log(params);

  await client.mutate({
    mutation: verifyUserQuery,
    variables: {token: params.token}
  });

  return {
    props: {}
  };
}

export default Verify;
