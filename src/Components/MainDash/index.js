import Tecnologies from "../Tecnologies";
import { Container, Header, StyledMais } from "./style";

function Main({ statesFluxo, statesTech }) {
  const [isAddingTech, setIsAddingTech, userTechs, setUserTechs] = statesTech;

  const [isFluxoCard, setIsFluxoCard, fluxoContent, setFluxoContent] =
    statesFluxo;
  function setAddingTech() {
    setIsAddingTech(!isAddingTech);
  }
  return (
    <Container>
      <Header>
        <h2>Tecnologias</h2>
        <StyledMais onClick={setAddingTech}>+</StyledMais>
      </Header>
      <Tecnologies statesFluxo={statesFluxo} statesTech={statesTech} techs={userTechs} />
    </Container>
  );
}
export default Main;
