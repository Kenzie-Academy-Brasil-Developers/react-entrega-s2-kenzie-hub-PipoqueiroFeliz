import Tech from "../Tech";
import { Container } from "./style";

function Tecnologies({ statesTech ,techs }) {

  return (
    <Container>
      {techs.map((tech, i) => (
        <Tech key={i} statesTech={statesTech} tech={tech} />
      ))}
    </Container>
  );
}
export default Tecnologies;
