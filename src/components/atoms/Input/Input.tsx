import {InputHTMLAttributes} from 'react';
import {Container, InputContainer, Label} from './style';

interface IInput extends InputHTMLAttributes<any> {
  label?: string;
}

export const Input = ({onChange, required, label}: IInput) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer onChange={onChange} required={required} />
    </Container>
  );
};
