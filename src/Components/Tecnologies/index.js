import Tech from "../Tech";
import { Container } from "./style";

function Tecnologies({ statesFluxo, statesTech, techs }) {
  return (
    <Container>
      {techs.map((tech, i) => (
        <Tech key={i} statesFluxo={statesFluxo} statesTech={statesTech} tech={tech} />
      ))}
    </Container>
  );
}
export default Tecnologies;
