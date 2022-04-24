import React from "react";
import { Box } from "@chakra-ui/react";
import Card from "../Card";
import { useRouter } from "next/router";
import { CardData } from "../../types/CardData";

// @ts-ignore
const ViewPage = ({ cards }) => {
  const router = useRouter();

  const counts = {
    cardType: {
      Instant: 0,
      Ruleset: 0,
      Counter: 0,
    },
    useCount: {
      Unlimited: 0,
      "Single-Use": 0,
    },
  };

  // const createAdjustedCardData = (cardData: CardData[]) => {
  //   const newArray = [];
  //   for (const cards of cardData) {
  //     cards.imageSource = getCardImage(cards.imageSource);
  //     for (let i = 0; i < cards.cardCount; i++) {
  //       newArray.push(cards);
  //       counts.cardType[cards.cardType]++;
  //       counts.useCount[cards.useCount]++;
  //     }
  //   }
  //   return newArray;
  // };
  //
  // const adjustedCardData = createAdjustedCardData(cardData);

  const adjustedCardData = cards;

  // console.log("number of cards", adjustedCardData.length);
  // console.log("Card Types", counts.cardType);
  // console.log("Card Use Counts", counts.useCount);

  // @ts-ignore
  return (
    <Box>
      {adjustedCardData.map((cardData: CardData) => (
        <Box
          backgroundColor={"black"}
          key={cardData.id}
          onClick={() => router.push(`/cards/${cardData.id}`)}
          // p={2}
          // border={"1px dashed black"}
          display={"inline-block"}
        >
          <Card cardData={cardData} />
        </Box>
      ))}
    </Box>
  );
};

export default ViewPage;
