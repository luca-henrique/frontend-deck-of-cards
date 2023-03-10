import {useAppDispatch, useAppSelector} from '../../../hooks/useHookSagas';
import {
  getNewRandomCardRequest,
  randomCards,
} from '../../../store/reducer/deck/actions';
import {Button} from '../..';

export const ContainerButtonGroupDeck = () => {
  const {deck_id, limit, quantity_cart_push} = useAppSelector(
    (state) => state.deck,
  );
  const dispatch = useAppDispatch();

  const LIMIT_PUSH = limit <= quantity_cart_push;

  const addNewCard = () =>
    !LIMIT_PUSH && dispatch(getNewRandomCardRequest({deck_id}));

  return (
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
  );
};
