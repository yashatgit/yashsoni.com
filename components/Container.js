import styled from 'styled-components';
import { column } from '../styles/mixins';

const Container = styled.main`
  ${column}
  padding: 20px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export default Container;
