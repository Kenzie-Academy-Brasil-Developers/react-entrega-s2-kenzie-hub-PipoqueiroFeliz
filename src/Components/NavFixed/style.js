import styled from "styled-components";

export const Container = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 70px;
  align-items: center;

  .logoLogout {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 300px;
    margin: 15px auto;
  }
  img {
    height: 15px;
  }
  button {
    margin: auto 0;
  }
  @media screen and (min-width: 768px) {
    .logoLogout {
      width: 450px;
    }
  }
  @media screen and (min-width: 1024px) {
    .logoLogout {
      width: 750px;
    }
  }
`;
