import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--gray);

  margin: 0 auto;
  padding: 22px 8px;
  border-radius: 4px;

  width: 300px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1024px) {
    width: 750px;
    padding: 23px 22px;
  }
`;
