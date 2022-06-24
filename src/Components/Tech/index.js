import Button from "../Button";
import { Container } from "./style";

import deletar from "../../imgs/delete.svg";
import axios from "axios";
import { toast } from "react-toastify";

function Tech({ statesFluxo, statesTech, tech }) {
  const [isAddingTech, setIsAddingTech, userTechs, setUserTechs] = statesTech;
  const [isFluxoCard, setIsFluxoCard, fluxoContent, setFluxoContent] =
    statesFluxo;

  function deletarTech() {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${tech.id}`, config)
      .then((resp) => {
        const newTechs = userTechs.filter((tec) => tec.id !== tech.id);
        setUserTechs(newTechs);
        toast.success("tecnologia removida com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  function editarTech(event) {
    if (event.target === event.currentTarget) {
      setIsFluxoCard(true);
      setFluxoContent(tech);
    }
  }

  return (
    <Container onClick={editarTech}>
      <p>{tech.title}</p>
      <span>
        {tech.status} <img onClick={deletarTech} src={deletar} alt="deletar" />
      </span>
    </Container>
  );
}
export default Tech;
