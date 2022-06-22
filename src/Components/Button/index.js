import { ThemeButton } from "../../styles/style";

function Button({
  type,
  children,
  lilButt,
  whiteSchema,
  blackSchema,
  ...rest
}) {
  return (
    <ThemeButton
      lilButt={lilButt}
      whiteSchema={whiteSchema}
      blackSchema={blackSchema}
      {...rest}
      type={type}
    >
      {children}
    </ThemeButton>
  );
}
export default Button;
