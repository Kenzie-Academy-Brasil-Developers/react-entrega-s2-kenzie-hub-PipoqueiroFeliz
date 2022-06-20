import { Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

function Rotas() {
  return (
    <Routes>
      <Route exact path="/cadastro" element={<Cadastro />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}
export default Rotas;
