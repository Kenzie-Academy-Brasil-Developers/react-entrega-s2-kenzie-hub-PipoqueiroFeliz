import { Container } from "./style";

function Input({ name, label, type, register, error, ...rest }) {
  return (
    <Container isErrored={!!error} type={type}>
      <p>
        {label} {!!error && <span> - {error}</span>}
      </p>
      <input {...register(name)} {...rest} type={type} />
    </Container>
  );
}
export default Input;
