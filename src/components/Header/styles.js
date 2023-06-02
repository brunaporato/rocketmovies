import styled from 'styled-components';



export const Container = styled.div`
  width: 100%;
  height: 11.5rem;
  display: flex;
  align-items: center;
  padding: 2.4rem 12.3rem;
  justify-content: space-between;
  gap: 6.4rem;
  border-bottom: 1px solid ${({theme}) => theme.colors.background_300};
  grid-area: header;

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.pink};
  }

  > input {
    background: ${({theme}) => theme.colors.dark};
    border: none;
    border-radius: 1rem;
    width: 63rem;
    padding: 1.9rem 2.4rem;
    height: 5.6rem;
    color: ${({theme}) => theme.colors.white};

    &::placeholder {
      color: ${({theme}) => theme.colors.gray_300};
      font-size: 1.4rem;
    }
  }
`

export const User = styled.div`
   display: flex;
    align-items: center;
    gap: .9rem;

    > div {
      text-align: right;
      h2 {
        font-size: 1.4rem;
        color: ${({theme}) => theme.colors.white};
      }

      a {
        font-size: 1.4rem;
        color: ${({theme}) => theme.colors.gray_300};
        right: 0;
      }
    }

    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
      border: 1px solid ${({theme}) => theme.colors.background_300};
    }
`