import {ButtonHTMLAttributes} from 'react';
import {Container} from './style';

interface IButton extends ButtonHTMLAttributes<any> {}

export const Button = ({onClick, children}: IButton) => {
  return <Container onClick={onClick}>{children}</Container>;
};
