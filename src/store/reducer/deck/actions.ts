import {createAction} from '@reduxjs/toolkit';

import {Card, IDeck} from './types';

export const readDeckRequest = createAction('deck/read-deck-request');
export const readDeckSuccess = createAction<IDeck>('deck/read-deck-success');

export const getNewRandomCardRequest = createAction<{deck_id: string}>(
  'deck/get-new-random-card-request',
);

export const getNewRandomCardSuccess = createAction<Card>(
  'deck/get-new-random-card-success',
);

export const randomCards = createAction('deck/random-cards');
