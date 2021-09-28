import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import client from "../../apollo-client";
import { verifyUserQuery } from "../../helpers/constants";

const Verify = () => {
  const router = useRouter();
  const { token } = router.query;

  return <p>Account is verified!</p>;
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
