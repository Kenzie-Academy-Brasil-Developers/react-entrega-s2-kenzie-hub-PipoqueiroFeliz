import styled from "styled-components";

export const ThemeButton = styled.button`
  font-size: 16px;

  height: 38.5px;
  width: 100%;
  margin-bottom: 10px;

  background-color: ${(props) => (props.whiteSchema ? "#868E96" : "#FF577F")};
  color: var(--white);

  border-style: none;
  border-radius: 4px;

  &:focus {
    background-color: var(--focusRed);
  }
`;
