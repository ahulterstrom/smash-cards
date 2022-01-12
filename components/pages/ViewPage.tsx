import React from "react";
import { Box } from "@chakra-ui/react";
import { cardData } from "../../lib/cardData";
import Card from "../Card";
import { CardData } from "../../types/CardData";
import { getCardImage } from "../../lib/cardFunctions";

const ViewPage = () => {
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

  const createAdjustedCardData = (cardData: CardData[]) => {
    const newArray = [];
    for (const card of cardData) {
      card.imageSource = getCardImage(card.imageSource);
      for (let i = 0; i < card.cardCount; i++) {
        newArray.push(card);
        counts.cardType[card.cardType]++;
        counts.useCount[card.useCount]++;
      }
    }
    return newArray;
  };

  const adjustedCardData = createAdjustedCardData(cardData);

  console.log("number of unique cards", cardData.length);
  console.log("number of cards", adjustedCardData.length);
  console.log("Card Types", counts.cardType);
  console.log("Card Use Counts", counts.useCount);

  return (
    <Box>
      {adjustedCardData.map((cardData, key) => (
        <Box
          key={key}
          p={2}
          border={"1px dashed black"}
          display={"inline-block"}
        >
          <Card cardData={cardData} />
        </Box>
      ))}
    </Box>
  );
};

export default ViewPage;
