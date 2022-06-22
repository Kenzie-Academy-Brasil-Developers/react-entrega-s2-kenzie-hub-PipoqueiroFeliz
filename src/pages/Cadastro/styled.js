import styled from "styled-components";

export const Header = styled.header`
  padding: 70px auto;
  width: 100vw;
  height: 90px;
  background-color: var(--black);

  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;

  img {
    margin: 60px;
    height: 17px;
  }

  @media screen and (min-width: 1024px) {
    img {
      height: 20px;
    }
  }
`;
