export interface IDeck {
  success: boolean;
  deck_id: string;
  cards: Array<Card>;
  remaining: string;
  loading: boolean;

  limit: number;
  quantity_cart_push: number;
}

export interface Card {
  code: string;
  image: [];
  suit: string;
  value: string;
}
