import {useAppDispatch, useAppSelector} from '../../../hooks';
import {
  getNewRandomCardRequest,
  randomCards,
} from '../../../store/reducer/deck/actions';
import {Button} from '../..';

import {Container, ButtonGroup} from './style';

export const ContainerButtonGroupDeck = () => {
  const {deck_id, limit, quantity_cart_push} = useAppSelector(
    (state) => state.deck,
  );
  const dispatch = useAppDispatch();

  const LIMIT_PUSH = limit <= quantity_cart_push;

  const addNewCard = () =>
    !LIMIT_PUSH && dispatch(getNewRandomCardRequest({deck_id}));

  return (
    <Container>
      <ButtonGroup>
        <Button onClick={() => addNewCard()}>
          Pegar nova carta {quantity_cart_push} / {limit}
        </Button>
        <Button onClick={() => dispatch(randomCards())}>
          Embaralhar cartas
        </Button>
      </ButtonGroup>
    </Container>
  );
};
