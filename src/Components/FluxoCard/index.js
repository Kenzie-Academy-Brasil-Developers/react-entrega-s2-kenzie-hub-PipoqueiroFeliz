import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

import Button from "../Button";
import Input from "../Forms/Input";
import SelectTech from "../Forms/SelectTech";
import {
  Container,
  StyledHeader,
  StyledAddingForms,
  Containerzin,
} from "./style";

function FluxoCard({ statesFluxo, statesTech }) {
  const [isFluxoCard, setIsFluxoCard, fluxoContent, setFluxoContent] =
    statesFluxo;

  const [isAddingTech, setIsAddingTech, userTechs, setUserTechs] = statesTech;

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    status: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function deletarTech() {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete(
        `https://kenziehub.herokuapp.com/users/techs/${fluxoContent.id}`,
        config
      )
      .then((resp) => {
        const newTechs = userTechs.filter((tec) => tec.id !== fluxoContent.id);
        setUserTechs(newTechs);
        toast.success("tecnologia removida com sucesso!");
        closeWindow();
      })
      .catch((err) => console.log(err));
  }
  function submited(data) {
    console.log(data, fluxoContent.id);
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .put(
        `https://kenziehub.herokuapp.com/users/techs/${fluxoContent.id}`,
        data,
        config
      )
      .then((resp) => {
        console.log(resp);
        updateTechs(resp.data);
        toast.success("Tecnologia alterada com sucesso");
        closeWindow();
      })
      .catch((err) => console.log(err));
  }

  function updateTechs(data) {
    let techsFiltered = userTechs.filter((tech) => tech !== fluxoContent);
    setUserTechs([data, ...techsFiltered], userTechs);
  }
  const holders = {
    name: "Digite a tecnologia",
    email: "Digite seu email",
    password: "Digite sua senha",
    passwordConfirm: "Digite sua senha",
    biografia: "Fale sobre você",
    contato: "Opção de contato",
  };

  function closeWindow() {
    setIsFluxoCard(!isFluxoCard);
  }
  function containerClicked(event) {
    if (event.target === event.currentTarget) {
      closeWindow();
    }
  }

  return (
    <Container onClick={containerClicked}>
      <StyledHeader>
        <p>Alterando tecnologia</p>
        <span onClick={closeWindow}>X</span>
      </StyledHeader>

      <StyledAddingForms onSubmit={handleSubmit(submited)}>
        <Input
          value={fluxoContent.title}
          name="title"
          label="Nome"
          type="name"
          register={register}
          placeholder={holders.name}
          error={errors.name?.message}
        />
        <SelectTech
          value={fluxoContent.status}
          label="Selecionar status"
          error={errors.techLevel?.message}
          name="status"
          register={register}
        />
        <Button type="submit">Alterar tecnologia!</Button>
      </StyledAddingForms>
      <Containerzin>
        <Button whiteSchema onClick={deletarTech}>
          Deletar tecnologia
        </Button>
      </Containerzin>
    </Container>
  );
}
export default FluxoCard;
