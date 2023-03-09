import styled from 'styled-components';
import {COLORS} from '../../common/colors';

export const Container = styled.div`
  background-color: ${COLORS.dark_green};
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;
