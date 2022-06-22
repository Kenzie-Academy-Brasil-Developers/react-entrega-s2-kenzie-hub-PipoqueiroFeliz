import styled from "styled-components";

export const Header = styled.header`
  height: 100px;

  background-color: var(--black);
  width: 100%;

  position: fixed;
  top: 0;

  div {
    margin: 50px auto;
    width: 300px;
    display: flex;
    justify-content: space-between;

    button {
      width: fit-content;
      padding: 10px 25px;
    }
  }

  img {
    height: 17px;
  }

  @media screen and (min-width: 1024px) {
    img {
      height: 20px;
    }
  }
`;
