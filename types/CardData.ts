export interface CardData {
  id: string;
  cardName?: string;
  cardType: "Ruleset" | "Counter" | "Instant";
  cardCount: number;
  useCount: "Unlimited" | "Single-Use";
  rarity: "common" | "uncommon" | "busted";
  cardEffect: string;
  flavorText?: string;
  imageUrl?: string;
}
