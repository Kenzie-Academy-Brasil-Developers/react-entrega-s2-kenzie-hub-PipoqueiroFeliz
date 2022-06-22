import styled from "styled-components";

export const ThemeButton = styled.button`
  font-size: 16px;

  height: 38.5px;
  width: ${(props) => (props.lilButt ? "fit-content" : "100%")};
  padding: ${(props) => (props.lilButt ? "5px 15px" : "0px")};

  margin-bottom: 10px;

  background-color: ${(props) =>
    props.whiteSchema ? "#868E96" : props.blackSchema ? "#212529" : "#FF577F"};
  color: var(--white);

  border-style: none;
  border-radius: 4px;

  &:focus {
    background-color: var(--focusRed);
  }
`;
