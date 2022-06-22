import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 300px;
  height: 131px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin: 71px auto 0;
  span {
    font-weight: 400;
    font-size: 12px;
    color: #868e96;
  }
  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }

  @media screen and (min-width: 1024px) {
    width: 750px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
