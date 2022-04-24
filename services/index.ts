import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function doQueryToGetAll() {
  // Connect the client
  await prisma.$connect();
  // ... you will write your Prisma Client queries here
  // await cardData.forEach(
  //   async (item) => await prisma.cards.create({ data: item })
  // );
  //
  const allCards = await prisma.card.findMany();

  return allCards;
  // console.log(allCards);
}

export async function getAllCards() {
  const result = await doQueryToGetAll()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  return result;
}

// @ts-ignore
async function doQueryGetById(id) {
  await prisma.$connect();

  const card = await prisma.card.findUnique({ where: { id: id } });

  return card;
}

// @ts-ignore
export async function getCardById(id) {
  const result = await doQueryGetById(id)
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  return result;
}

// @ts-ignore
async function doQueryUpdate(card) {
  await prisma.$connect();

  // console.log("card in update", card);

  const result = await prisma.card.update({
    where: { id: card.id },
    data: {
      cardName: card.cardName,
      cardCount: parseInt(card.cardCount),
      cardEffect: card.cardEffect,
      cardType: card.cardType,
      rarity: card.rarity,
      useCount: card.useCount,
      imageUrl: card.imageUrl,
    },
  });

  return result;
}

// @ts-ignore
export async function updateCard(card) {
  const result = await doQueryUpdate(card)
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  return result;
}
