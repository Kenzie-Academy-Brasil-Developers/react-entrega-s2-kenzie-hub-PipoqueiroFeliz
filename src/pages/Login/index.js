import Button from "../../Components/Button";
import Input from "../../Components/Forms/Input";
import StyledForms from "../../Components/Forms/styled";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

function Login() {
  const schema = yup.object().shape({
    email: yup.string().email("Email invalido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo 8 digitos")
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
    console.log(data);
    // api
    //   .post("/user", data)
    //   .then((response) => {})
    //   .catch();
  }
  return (
    <>
      <img src="../../imgs/Logo.png" alt="kenziehub" />
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
        <Button whiteSchema>Cadastre-se</Button>
      </StyledForms>
    </>
  );
}
export default Login;
