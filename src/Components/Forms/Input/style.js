import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;

  input {
    background-color: var(--gray);
    color: var(--white);

    border: 0.98px var(--white) solid;
    border-radius: 3.21px;

    width: 100%;
    height: 38.5px;

    margin: 12px 0 18px;
    padding-left: 13.5px;

    ${(props) =>
      props.isErrored &&
      css`
        border-color: var(--red);
      `}
  }
`;
