import {combineReducers} from 'redux';
import {deckReducer} from './deck/reducer';

export const rootReducer = combineReducers({
  deck: deckReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
