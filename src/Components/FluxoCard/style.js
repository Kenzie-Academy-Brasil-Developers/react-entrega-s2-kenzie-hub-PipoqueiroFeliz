import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 1024px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 200vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const appearFromLeft = keyframes`
from{
    opacity: 0;
    transform: translateX(-50px);
}
to{
    opacity: 1;
    transform: translateX(0px);
}
`;

export const StyledHeader = styled.div`
  background-color: var(--gray);
  width: 300px;
  margin: 0 auto;
  height: 40px;

  border-radius: 4px 4px 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  span {
    color: var(--lilGray);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1024px) {
    width: 300px;
    margin-top: 150px;
    animation: ${appearFromLeft} 1s;
  }
`;
export const StyledAddingForms = styled.form`
  background-color: var(--bigGray);

  width: 300px;
  padding: 33px 18px 15px;
  margin: 0 auto;

  border-radius: 0 0 4px 4px;

  h1 {
    text-align: center;
    margin-bottom: 28px;
  }
  .span {
    font-size: 12px;
    color: var(--lilGray);
    align-self: center;
    margin: 12px 0;
  }
  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1024px) {
    animation: ${appearFromLeft} 1s;
    width: 300px;
  }
`;
export const Containerzin = styled.div`
  background-color: var(--bigGray);

  width: 300px;
  padding: 0px 18px 33px;
  margin: 0 auto;

  border-radius: 0 0 4px 4px;

  h1 {
    text-align: center;
    margin-bottom: 28px;
  }
  .span {
    font-size: 12px;
    color: var(--lilGray);
    align-self: center;
    margin: 12px 0;
  }
  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1024px) {
    animation: ${appearFromLeft} 1s;
    width: 300px;
  }
`;
