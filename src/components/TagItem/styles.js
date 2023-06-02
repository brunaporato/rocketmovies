import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.6rem;
  background: ${({theme, isNew}) => isNew ? 'transparent' : theme.colors.background_300};
  color: ${({theme}) => theme.colors.white};
  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.colors.gray_300}` : "none" };
  padding: 1.6rem;
  border-radius: 1rem;

  > button {
    border: none;
    background: none;
    color: ${({theme}) => theme.colors.pink};
    font-size: 2.8rem;
    align-items: center;
    display: flex;
  }

  > input {
    color: ${({theme}) => theme.colors.white};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({theme}) => theme.colors.gray_300}
    }
  }

`