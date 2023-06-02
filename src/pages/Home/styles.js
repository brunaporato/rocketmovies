import styled from 'styled-components';



export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem 13rem auto;
  grid-template-areas:
  "header"
  "title"
  "content"
  ;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4.7rem 0 3.7rem;
    padding: 0 10.6rem;
    grid-area: title;

    > h1 {
      font-size: 3.2rem;
      font-weight: 400;
      color: ${({theme}) => theme.colors.white};
    }

    button {
      height: 4.8rem;
    }
  }

  > main {
    margin: 0 10rem;
    grid-area: content;
    overflow-y: auto;

    &::-webkit-scrollbar-track {
      background-color: ${({theme}) => theme.colors.background_100};
    }
    &::-webkit-scrollbar {
        width: .8rem;
    }
    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.colors.pink};
        border-radius: .8rem;
    }
  }
`

export const Content = styled.div`
  display: flex;
  padding: 0 .8rem;
  flex-direction: column;
`