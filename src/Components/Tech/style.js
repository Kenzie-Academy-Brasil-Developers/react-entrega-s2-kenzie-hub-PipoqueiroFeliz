import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 48px;

  background-color: var(--bigGray);

  padding: 0 18px;
  border-radius: 4px;

  img {
    cursor: pointer;
    width: 12px;
  }

  transition: 500ms;
  &:hover {
    background-color: var(--lilGray);
    span {
      color: var(--white);
    }
  }
  p {
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
  }
  span {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: var(--lilGray);
  }
`;
