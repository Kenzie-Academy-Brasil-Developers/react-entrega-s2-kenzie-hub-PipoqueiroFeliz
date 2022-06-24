import { Container } from "./style";

function SelectTech({ label, error, register, name, value }) {
  // value? 'Avançado' :
  return (
    <Container>
      <p>
        {label} {!!error && <span> - {error}</span>}
      </p>
      <select {...register(name)} defaultValue={value}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado" selected>
          Avançado
        </option>
      </select>
    </Container>
  );
}
export default SelectTech;
