import axios from 'axios';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {getNewRandomCardSuccess, readDeckSuccess} from './actions';

const getDeckInformatios = async () =>
  axios.get<any[]>(
    'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
  );

const getDeck = async (id: string) =>
  axios.get<any[]>(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=5`);

const getRandomCard = async (id: string) =>
  axios.get<any[]>(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`);

function* getDeckInformation(): any {
  try {
    const {data} = yield call(getDeckInformatios);

    const deck = yield call(() => getDeck(data.deck_id));

    let newDeck: any = [];

    deck.data.cards.map((item, index) => {
      newDeck.push({
        name: `${item.suit}+${item.code}`,
        image: item.image,
        value: index,
        description: `A carte é ${item.code} de ${item.suit}`,
      });
    });

    deck.data.cards = newDeck;

    yield put(readDeckSuccess(deck.data));
  } catch (e) {
    console.log(e);
  }
}

function* getNewCard(payload): any {
  try {
    const {data} = yield call(() => getRandomCard(payload.payload.deck_id));

    yield put(getNewRandomCardSuccess(data.cards[0]));
  } catch (e) {
    console.log(e);
  }
}

function* deckSagas() {
  yield all([
    takeLatest('deck/read-deck-request', getDeckInformation),
    takeLatest('deck/get-new-random-card-request', getNewCard),
  ]);
}

export default deckSagas;
