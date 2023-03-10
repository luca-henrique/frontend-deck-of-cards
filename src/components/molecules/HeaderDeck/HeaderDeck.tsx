import {useAppSelector, useLocalStorage} from '../../../hooks/';

import {Title, Header, InformationContainer} from './style';

export const HeaderDeck = () => {
  const {limit, quantity_cart_push} = useAppSelector((state) => state.deck);

  const [value] = useLocalStorage('name', '');

  return (
    <Header>
      <InformationContainer>
        <Title>
          {quantity_cart_push}/{limit}
        </Title>
      </InformationContainer>
      <InformationContainer>
        <Title>{value}</Title>
      </InformationContainer>
    </Header>
  );
};
