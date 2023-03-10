import {useAppSelector} from '../../../hooks/useHookSagas';
import {useLocalStorage} from '../../../hooks/useLocalStorage';

import {Title} from './style';

export const HeaderDeck = () => {
  const {cards, loading, deck_id, limit, quantity_cart_push} = useAppSelector(
    (state) => state.deck,
  );

  const [value] = useLocalStorage('name', '');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Title>
          {quantity_cart_push}/{limit}
        </Title>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Title>{value}</Title>
      </div>
    </div>
  );
};