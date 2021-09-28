import { useQuery, gql, useMutation } from "@apollo/client";
import Head from "next/head";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import { createUserQuery } from "../helpers/constants";

export default function Home() {
  const [email, setEmail] = useState("");
  const [register] = useMutation(createUserQuery, {
    variables: {
      email,
      firstName: "pat",
      lastName: "coll",
    },
    onCompleted: () => console.log("completed"),
  });


  return (
    <div className="container">
      <Head>
        <title>Phish Me If You Can</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-10">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              {/* <img className="h-48 w-full object-cover md:w-48" src="/img/store.jpg" alt="Man looking at item at a store"> */}
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Phish Me If You Can
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Will you get caught?
              </a>
              <p className="mt-2 text-gray-500">
                It takes just 30 seconds to get started. As soon as you have
                confirmed your email address the fully automated phishing
                campaign will begin..
              </p>
              <div className="w-full">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      placeholder="Enter here.."
                      onChange={(event) => setEmail(event.target.value)}
                    ></input>
                  </div>
                  <div className="flex-1 justify-center">
                    <button
                      onClick={register}
                      type="button"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
