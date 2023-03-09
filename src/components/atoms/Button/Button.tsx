import {ButtonHTMLAttributes} from 'react';
import {Container} from './style';

interface IButton extends ButtonHTMLAttributes<any> {}

export const Button = ({onClick}: IButton) => {
  return <Container onClick={onClick}>Entrar</Container>;
};
