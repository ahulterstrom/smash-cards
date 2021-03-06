import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getAllCards, getCardById } from "../../services";
import CardPage from "../../components/pages/CardPage";

// @ts-ignore
const Card: NextPage = ({ card }) => {
  // console.log("card", card);
  return (
    <div>
      <Head>
        <title>Smash Cards</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CardPage card={card} />
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allCards = await getAllCards();
  // console.log("allCards", allCards);
  const paths = allCards.map((card) => ({
    params: { id: card.id },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allCards = await getAllCards();

  // console.log("params", params);

  // @ts-ignore
  const card = await getCardById(params.id);

  // console.log("card", card);

  return {
    props: { card: card }, // will be passed to the page component as props
    revalidate: true,
  };
};

export default Card;
