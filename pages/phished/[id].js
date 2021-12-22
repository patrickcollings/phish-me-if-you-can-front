import { useMutation } from "@apollo/client";
import axios from "axios";
import { useRouter } from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import About from "../../components/HomeOne/About";
import Footer from "../../components/Layouts/Footer";
import Navbar from "../../components/Layouts/Navbar";
import client from "../../utils/apollo-client";
import { unsubscribeUserQuery } from "../../utils/constants";

const Phished = () => {
  const router = useRouter();
  const { token } = router.query;

  return (
    <>
      <div
        className="text-container ptb-100"
        style={{
          height: '100vh',
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ textAlign: "center" }}>You've been phished!</h2>
          <h3 style={{ textAlign: "center" }}>
            Don't worry nothing bad is going to happen, but remember to check
            your emails carefully.
          </h3>
          <img src="/images/gotcha.gif" alt="Image" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  console.log(params);

  if (params.id) {
    axios
      .get(`http://localhost:8080/email/linkopened/${params.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return {
    props: {},
  };
}

export default Phished;
