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
  BlackScreen,
} from "./style";

function AddingTech({ statesTech }) {
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

  function submited(data) {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, config)
      .then((resp) => {
        setUserTechs([resp.data, ...userTechs]);
        toast.success("Tecnologia cadastrada!");
        setAddingTech();
      })
      .catch((err) => toast.error("Não pode registrar com o mesmo nome!"));
  }

  const holders = {
    name: "Digite a tecnologia",
    email: "Digite seu email",
    password: "Digite sua senha",
    passwordConfirm: "Digite sua senha",
    biografia: "Fale sobre você",
    contato: "Opção de contato",
  };

  function setAddingTech() {
    setIsAddingTech(!isAddingTech);
  }
  function containerClicked(event) {
    if (event.target === event.currentTarget) {
      setAddingTech();
    }
  }

  return (
    <Container onClick={containerClicked}>
      <StyledHeader>
        <p>Cadastrar Tecnologias</p>
        <span onClick={setAddingTech}>X</span>
      </StyledHeader>

      <StyledAddingForms onSubmit={handleSubmit(submited)}>
        <Input
          name="title"
          label="Nome"
          type="name"
          register={register}
          placeholder={holders.name}
          error={errors.name?.message}
        />
        <SelectTech
          label="Selecionar status"
          error={errors.techLevel?.message}
          name="status"
          register={register}
        />
        <Button type="submit">Cadastrar tecnologia!</Button>
      </StyledAddingForms>
    </Container>
  );
}
export default AddingTech;
