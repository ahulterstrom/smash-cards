export interface CardData {
  cardName?: string;
  cardType: "Ruleset" | "Counter" | "Instant";
  cardCount: number;
  useCount: "Unlimited" | "Single-Use";
  rarity: "common" | "uncommon" | "busted";
  cardEffect: string;
  flavorText?: string;
  imageSource?: string;
}
