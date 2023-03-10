import {createReducer} from '@reduxjs/toolkit';
import {
  readDeckRequest,
  readDeckSuccess,
  getNewRandomCardSuccess,
  randomCards,
} from './actions';

import {initialState} from './initial';

export const deckReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(readDeckRequest, (state, action) => {
      state.loading = true;
    })
    .addCase(readDeckSuccess, (state, action) => {
      state.loading = false;
      state.deck_id = action.payload.deck_id;
      state.remaining = action.payload.remaining;
      state.success = action.payload.success;
      state.cards = action.payload.cards;
    })
    .addCase(getNewRandomCardSuccess, (state, action) => {
      state.quantity_cart_push = state.quantity_cart_push + 1;

      state.cards = [...state.cards, action.payload];
    })

    .addCase(randomCards, (state, action) => {
      state.cards = shuffle(state.cards);
    });
});

function shuffle(array: any) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
