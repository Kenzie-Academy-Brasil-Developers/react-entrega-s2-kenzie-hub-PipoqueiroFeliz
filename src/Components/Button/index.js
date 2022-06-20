import { ThemeButton } from "../../styles/style";

function Button({ children, whiteSchema }) {
  return <ThemeButton whiteSchema={whiteSchema}>{children}</ThemeButton>;
}
export default Button;
