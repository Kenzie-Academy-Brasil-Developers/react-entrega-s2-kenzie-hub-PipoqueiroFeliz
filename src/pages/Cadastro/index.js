import Button from "../../Components/Button";
import Input from "../../Components/Forms/Input";
import StyledForms from "../../Components/Forms/styled";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import axios from "axios";

import Select from "../../Components/Forms/Select";

import logo from "../../imgs/Logo.png";
import { useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Header } from "./styled";

function Cadastro({ authentic }) {
  let navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email invalido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo 6 digitos")
      .required("Campo Obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo Obrigatório"),
    bio: yup.string().required("Campo Obrigatório"),
    contact: yup.string().required("Campo Obrigatório"),
    course_module: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const holders = {
    name: "Digite seu nome",
    email: "Digite seu email",
    password: "Digite sua senha",
    passwordConfirm: "Digite sua senha",
    biografia: "Fale sobre você",
    contato: "Opção de contato",
  };
  function submited(data) {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        toast.success("conta criada com sucesso!");
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }
  function vaiLogin() {
    navigate("/login");
  }

  if (authentic) {
    navigate("/");
  }
  return (
    <>
      <Header>
        <img src={logo} alt="kenziehub" />
      </Header>
      <StyledForms onSubmit={handleSubmit(submited)}>
        <h1>Crie sua conta</h1>
        <Input
          name="name"
          label="Nome"
          type="name"
          register={register}
          placeholder={holders.name}
          error={errors.name?.message}
        />
        <Input
          name="email"
          label="Email"
          type="email"
          register={register}
          placeholder={holders.email}
          error={errors.email?.message}
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          register={register}
          placeholder={holders.password}
          error={errors.password?.message}
        />
        <Input
          name="passwordConfirm"
          label="Confirme senha"
          type="password"
          register={register}
          placeholder={holders.passwordConfirm}
          error={errors.passwordConfirm?.message}
        />
        <Input
          name="bio"
          label="Biográfia"
          type="biografia"
          register={register}
          placeholder={holders.biografia}
          error={errors.bio?.message}
        />
        <Input
          name="contact"
          label="Contato"
          type="contato"
          register={register}
          placeholder={holders.contato}
          error={errors.contact?.message}
        />
        <Select
          label="Módulo"
          name="course_module"
          error={errors.module?.message}
          register={register}
        />

        <Button type="submit">Cadastrar</Button>
        <p className="span">Ja tem cadastro? faça o login!</p>
        <Button whiteSchema onClick={vaiLogin}>
          Login
        </Button>
      </StyledForms>
    </>
  );
}
export default Cadastro;
