import {useHookFormSignIn} from '../../../hooks';

import {Form, Title} from './style';

import {Button, Input} from '../../';

export const SignInContainerForm = () => {
  const {setName, handleSubmit} = useHookFormSignIn();
  return (
    <Form onSubmit={handleSubmit}>
      <Title>Deck of Cards</Title>
      <div style={{height: '20px'}} />
      <Input
        label='Informe seu nome:'
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Button type='submit'>Ver cartas</Button>
    </Form>
  );
};
