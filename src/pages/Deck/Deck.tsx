import {
  ListCardsDeck,
  HeaderDeck,
  ContainerButtonGroupDeck,
} from '../../components';

import {Container} from './style';

export const Deck = () => {
  return (
    <Container>
      <HeaderDeck />
      <ListCardsDeck />
      <ContainerButtonGroupDeck />
    </Container>
  );
};
