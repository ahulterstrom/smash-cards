import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { cardData } from "../lib/cardData";
import Card from "./Card";

const HomePage = () => {
  return (
    <Box>
      {cardData.map((cardData, key) => (
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

export default HomePage;
