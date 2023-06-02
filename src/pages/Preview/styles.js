import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem 8.5rem auto;
  grid-template-areas:
  "header"
  "link"
  "content";

  a {
    grid-area: link;
    display: flex;
    align-items: center;
    gap: .8rem;
    color: ${({theme}) => theme.colors.pink};
    margin-left: 12.3rem;
  }

  main {
    grid-area: content;
    margin: 0 11.3rem;
    padding: 0 1rem 5rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    .title {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2.4rem;
    }

    .signed {
      display: flex;
      align-items: center;
      gap: .8rem;
      margin-bottom: 4rem;

      > p {
        color: ${({theme}) => theme.colors.white};
      }

      > img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }

      > svg {
        color: ${({theme}) => theme.colors.pink};
      }
    }

    .tags {
      display: flex;
      gap: .8rem;
      margin-bottom: 4rem;
    }

    p {
      line-height: 2.5rem;
      text-align: justify;
    }

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