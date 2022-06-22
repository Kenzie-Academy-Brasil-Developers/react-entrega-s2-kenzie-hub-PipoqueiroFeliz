import Tecnologies from "../Tecnologies";
import { Container, Header, StyledMais } from "./style";

function Main({ statesTech }) {
  const [isAddingTech, setIsAddingTech, userTechs, setUserTechs] = statesTech;
  function setAddingTech() {
    setIsAddingTech(!isAddingTech);
  }
  return (
    <Container>
      <Header>
        <h2>Tecnologias</h2>
        <StyledMais onClick={setAddingTech}>+</StyledMais>
      </Header>
      <Tecnologies statesTech={statesTech} techs={userTechs} />
    </Container>
  );
}
export default Main;
