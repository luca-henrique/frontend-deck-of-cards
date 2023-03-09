import {Container, Title} from './style';

import {Input, Button} from '../../components';

export const SignIn = () => {
  return (
    <Container>
      <div style={{width: '30%'}}>
        <Title>Deck of Cards</Title>
        <div style={{margin: '2.5rem'}} />
        <Input />
        <div style={{margin: '1rem'}} />
        <Button />
      </div>
    </Container>
  );
};
