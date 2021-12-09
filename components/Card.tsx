import React, { FC } from "react";
import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { CardData } from "../types/CardData";
import {
  getBackgroundSource,
  getCardImage,
  getCardName,
  getCardText,
  getColorTheme,
  getFontSize,
  getRandomCardImage,
  getRarityInitial,
  getTextFromCardType,
} from "../lib/cardFunctions";

interface Props {
  cardData: CardData;
}

const Card: FC<Props> = ({ cardData }) => {
  const {
    cardName,
    cardType,
    useCount,
    rarity,
    cardEffect,
    flavorText,
    imageSource,
  } = cardData;
  return (
    <Box w="2.5in" h="3.5in" rounded={8} backgroundColor="black" pos="relative">
      <Box pos="absolute" h="90%" w="100%" overflow="clip" p={3} zIndex={4}>
        <Box
          backgroundImage={getBackgroundSource(rarity)}
          backgroundSize={"100px"}
          w="full"
          h="full"
          roundedTop={4}
          roundedBottom={100}
        />
      </Box>
      <Flex pos="relative" zIndex={8} p={3} w="full" h="full">
        <Flex
          flex={1}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box
            outline={"solid 2px rgba(0,0,0,.9)"}
            backgroundColor={getColorTheme(rarity)}
            boxShadow={"-5px -8px 20px -4px rgba(0,0,0,0.46) inset;"}
            mt={2}
            mx={1}
            rounded={"10px/30px"}
            px={2}
          >
            <Text>{getCardName(cardName)}</Text>
          </Box>
          <Box border={"solid 2px rgba(0,0,0,.9)"} mx={2}>
            <Image
              h="110px"
              w="100%"
              src={getCardImage(imageSource)}
              fallbackSrc={getRandomCardImage()}
              fit="cover"
            />
          </Box>
          <Flex
            outline={"solid 2px rgba(0,0,0,.9)"}
            backgroundColor={getColorTheme(rarity)}
            boxShadow={"-5px -8px 20px -4px rgba(0,0,0,0.46) inset;"}
            mx={1}
            rounded={"8px/20px"}
            px={2}
            justifyContent={"space-between"}
          >
            <Text>{cardType}</Text>
            <Text>{useCount}</Text>
          </Flex>
          <Box
            border={"solid 2px rgba(0,0,0,.9)"}
            flex={1}
            backgroundImage={getBackgroundSource(rarity)}
            backgroundSize={"100px"}
            overflow="hidden"
            pos="relative"
            mx={2}
            roundedBottom={2}
          >
            <Box
              pos="absolute"
              w={"full"}
              h={"full"}
              p={1}
              opacity={0.7}
              filter={"contrast(50%) brightness(1.7) "}
              backgroundImage={"./wmarble.jpg"}
              backgroundSize={"100px"}
              zIndex={3}
            />
            <Box pos="absolute" overflow="clip" p={1} zIndex={4}>
              <Text
                overflow="clip"
                fontSize={getFontSize(getCardText(cardType, cardEffect))}
              >
                {getCardText(cardType, cardEffect)}
              </Text>
            </Box>
          </Box>

          <Box fontSize="8px" w="full" color="white" mt={1}>
            <Box>
              <Text>{`127 / 142 ${getRarityInitial(rarity)}`}</Text>
            </Box>
            <HStack justifyContent={"space-between"} w="full">
              <Box>
                <Text>{`AIW ◦ EN ◍`}</Text>
              </Box>
              <Box>
                <Text>™ & © 2021 All I Want For Christmas</Text>
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
