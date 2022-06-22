import { Container } from "./style";

function Select({ label, error, register, name }) {
  return (
    <Container>
      <p>
        {label} {!!error && <span> - {error}</span>}
      </p>
      <select {...register(name)}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>
    </Container>
  );
}
export default Select;
