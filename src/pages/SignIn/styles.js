import styled from "styled-components";
import bgImg from "../../assets/bgImg.png"

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 34rem;
  margin: 0 auto;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({theme}) => theme.colors.pink};
    line-height: 6.3rem;
  }

  > p {
    font-size: 1.4rem;
    color: ${({theme}) => theme.colors.gray_300};
    margin-bottom: 4.8rem;
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.white};
    margin-bottom: 4.8rem;
  }

  > a {
    height: 5.6rem;
    display: flex;
    justify-content: center;
    font-weight: 500;
    margin-top: 2.4rem;
  }

  .link {
    text-align: center;
    color: ${({theme}) => theme.colors.pink};
    margin-top: 4.2rem;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${bgImg}) no-repeat center center;
  background-size: cover;
  opacity: 40%;
`

