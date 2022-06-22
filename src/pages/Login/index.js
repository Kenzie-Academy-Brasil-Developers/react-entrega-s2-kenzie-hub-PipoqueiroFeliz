import Button from "../../Components/Button";
import Input from "../../Components/Forms/Input";
import StyledForms from "../../Components/Forms/styled";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import logo from "../../imgs/Logo.png";
import { Header } from "./styled";
import { toast } from "react-toastify";
import { useNavigate, Navigate } from "react-router-dom";

function Login({ authentic, setAuthentic }) {
  let navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("Email invalido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo 6 digitos")
      .required("Campo Obrigatório"),
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
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => {
        localStorage.setItem(
          "@kenzieHub:token",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem(
          "@kenzieHub:user",
          JSON.stringify(response.data.user)
        );

        toast.success("logado com sucesso");
        setAuthentic(true);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }
  function vaiCadastro() {
    navigate("/cadastro");
  }

  if (authentic) {
    navigate("/");
  }
  return (
    <>
      <Header>
        <div>
          <img src={logo} alt="kenziehub" />
          <Button onClick={vaiCadastro} blackSchema>
            Voltar
          </Button>
        </div>
      </Header>
      <StyledForms onSubmit={handleSubmit(submited)}>
        <h1>Login</h1>

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
        <Button type="submit">Entrar</Button>
        <p className="span">Ainda não tem Cadastro?</p>
        <Button whiteSchema onClick={vaiCadastro}>
          Cadastre-se
        </Button>
      </StyledForms>
    </>
  );
}
export default Login;
