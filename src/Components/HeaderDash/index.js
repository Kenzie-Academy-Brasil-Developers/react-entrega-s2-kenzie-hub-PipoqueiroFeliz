import Hr from "../Hr";
import { StyledHeader } from "./style";

function Header({ user }) {
  return (
    <>
      <StyledHeader>
        <h1>{user.name}</h1>
        <span>{user.course_module}</span>
      </StyledHeader>
      <Hr />
    </>
  );
}
export default Header;
