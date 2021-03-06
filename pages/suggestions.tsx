import type { NextPage } from "next";
import Head from "next/head";
import SuggestionsPage from "../components/pages/SuggestionsPage";

const Suggestions: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Smash Cards</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SuggestionsPage />
      </main>
    </div>
  );
};

export default Suggestions;
