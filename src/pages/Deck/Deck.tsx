import {useEffect} from 'react';
import {Button} from '../../components';
import {useAppDispatch, useAppSelector} from '../../hooks/useHookSagas';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import {
  getNewRandomCardRequest,
  readDeckRequest,
  randomCards,
} from '../../store/reducer/deck/actions';
import {Container, Title} from './style';

export const Deck = () => {
  const {cards, loading, deck_id, limit, quantity_cart_push} = useAppSelector(
    (state) => state.deck,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(readDeckRequest());
  }, []);

  const [value] = useLocalStorage('name', '');

  const LIMIT_PUSH = limit <= quantity_cart_push;

  const addNewCard = () =>
    !LIMIT_PUSH && dispatch(getNewRandomCardRequest({deck_id}));

  return (
    <Container>
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
      {loading ? (
        <></>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          {cards.map((item: any) => {
            return (
              <img src={item.image} style={{width: '160px', height: '200px'}} />
            );
          })}
        </div>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '20%',
            marginTop: '2%',
            gap: '20px',
          }}
        >
          <Button onClick={() => addNewCard()}>
            Pegar nova carta {quantity_cart_push} / {limit}
          </Button>
          <Button onClick={() => dispatch(randomCards())}>
            Embaralhar cartas
          </Button>
        </div>
      </div>
    </Container>
  );
};
