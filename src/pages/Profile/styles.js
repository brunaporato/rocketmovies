import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    height: 14.4rem;
    background: ${({theme}) => theme.colors.background_200};
    padding: 6.4rem 0 5.9rem 14.4rem;

    a {
      display: flex;
      align-items: center;
      gap: .8rem;
      color: ${({theme}) => theme.colors.pink};
    }
  }
`

export const Avatar = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 6.4rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
    margin-top: -9.5rem;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    border: none;
    color: ${({theme}) => theme.colors.background_300};
    font-size: 2.2rem;
    background: ${({theme}) => theme.colors.pink};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: .7rem;
    bottom: .7rem;

    cursor: pointer;

    input {
      display: none;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  padding: 0 41rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  a {
    font-weight: 500;
  }
`