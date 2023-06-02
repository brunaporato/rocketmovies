import styled from "styled-components";

import { Link } from "react-router-dom";


export const Container = styled(Link)`
  width: 100%;
  background: ${({theme}) => theme.colors.background_200};
  padding: 3.2rem;
  border: none;
  border-radius: 1.6rem;
  margin-bottom: 2.4rem;
  text-align: left;

  > h1 {
    color: ${({theme}) => theme.colors.white};
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin-bottom: .8rem;
  }

  > p {
    color: ${({theme}) => theme.colors.gray_100};
    line-height: 1.9rem;
    margin: 1.5rem 0;
  }

  > footer {
    display: flex;
    gap: .8rem;
  }
`