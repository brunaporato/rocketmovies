import styled from "styled-components";

import { Link } from "react-router-dom";


export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 3.2rem;
  gap: .8rem;
  border-radius: .8rem;
  background: ${({theme, isactive}) => isactive ? theme.colors.pink : theme.colors.dark};
  color: ${({theme, isactive}) => isactive ? theme.colors.background_100 : theme.colors.pink};
  font-weight: 400;
  border: none;

  > svg {
    color: ${({theme}) => theme.colors.background_100};
  }
`