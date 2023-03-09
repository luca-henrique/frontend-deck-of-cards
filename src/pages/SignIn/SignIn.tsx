import {Container, Title} from './style';

import {Input, Button} from '../../components';
import {useLocalStorage} from '../../hooks/useLocalStorage';

export const SignIn = () => {
  const [name, setName] = useLocalStorage('name', '');

  const addName = () => {
    setName('Lucas');
  };

  return (
    <Container>
      <div style={{width: '28%'}}>
        <Title>Deck of Cards</Title>
        <div style={{margin: '2.5rem'}} />
        <Input />
        <div style={{margin: '1rem'}} />
        <Button onClick={() => addName()} />
      </div>
    </Container>
  );
};
