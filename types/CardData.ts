export interface CardData {
  cardName?: string;
  cardType: string;
  useCount: string;
  rarity: "common" | "uncommon" | "busted";
  cardEffect: string;
  flavorText?: string;
  imageSource?: string;
}
