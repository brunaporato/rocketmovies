import styled from "styled-components";

export const Container = styled.div`
  background: ${({theme}) => theme.colors.background_300};
  color: ${({theme}) => theme.colors.gray_300};
  border-radius: .8rem;
  padding: .5rem 1.6rem;

  font-size: 1.4rem;
`