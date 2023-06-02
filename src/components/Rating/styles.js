import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${({ bigSize }) => (bigSize ? "center" : "start")};
  gap: 1rem;

  svg {
    font-size: ${({bigSize}) => bigSize ? "2.2rem" : "1.8rem"};
    color: ${({theme}) => theme.colors.pink};
  }
`