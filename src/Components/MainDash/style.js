import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  margin: 0px auto;

  @media screen and (min-width: 1024px) {
    width: 750px;
  }
`;
export const Header = styled.div`
  margin: 11px 0;
  display: flex;
  justify-content: space-between;
`;
export const StyledMais = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: var(--bigGray);
  color: var(--white);
  text-align: center;

  border: none;

  &:hover {
    background-color: var(--lilGray);
  }
`;
