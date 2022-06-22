import { Container } from "./style";

function SelectTech({ label, error, register, name }) {
  return (
    <Container>
      <p>
        {label} {!!error && <span> - {error}</span>}
      </p>
      <select {...register(name)}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
    </Container>
  );
}
export default SelectTech;
