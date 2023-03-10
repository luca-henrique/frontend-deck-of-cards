import {IDeck} from './types';

export const initialState: IDeck = {
  success: false,
  loading: false,
  deck_id: '',
  cards: [],
  remaining: '',
  limit: 3,
  quantity_cart_push: 0,
};
