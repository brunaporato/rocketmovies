import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas:
  "header"
  "content";

  .input-new {
    display: flex;
    flex-direction: column;
    margin: 4rem 9.5rem;
    padding: 0 1.5rem;
    gap: 4rem;
    grid-area: content;
    overflow-y: scroll;

    > a {
    color: ${({theme}) => theme.colors.pink};
    display: flex;
    align-items: center;
    gap: .8rem;
    }

    > h1 {
      font-size: 3.6rem;
      font-weight: 500;
      color: ${({theme}) => theme.colors.white};
      line-height: 4.7rem;
    }

    .name-rate {
      display: flex;
      gap: 4rem;
    }

    > textarea {
      background-color: ${({theme}) => theme.colors.dark};
      color: ${({theme}) => theme.colors.white};
      border: none;
      resize: none;
      padding: 1.9rem 1.6rem;
      width: 100%;
      min-height: 27rem;
      border-radius: 1rem;
    }

    .tags {
      > p {
      font-size: 2rem;
      color: ${({theme}) => theme.colors.gray_100};
      margin-bottom: 2.4rem;
    }
    }

    footer {
      display: flex;
      width: 100%;
      gap: 4rem;

      > a {
        width: 100%;
      }
    }

    &::-webkit-scrollbar-track {
      background-color: ${({theme}) => theme.colors.background_100};
      margin-block-start: 4rem;
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

export const TagWrapper = styled.div`
  display: flex;
  background: ${({theme}) => theme.colors.dark_200};
  border-radius: .8rem;
  width: 100%;
  padding: 1.6rem;
`