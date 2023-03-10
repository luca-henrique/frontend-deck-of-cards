import {ButtonHTMLAttributes} from 'react';
import {Container} from './style';

interface IButton extends ButtonHTMLAttributes<any> {}

export const Button = ({onClick, children, type}: IButton) => {
  return (
    <Container onClick={onClick} type={type}>
      {children}
    </Container>
  );
};
