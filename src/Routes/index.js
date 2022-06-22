import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

function Rotas() {
  const [authentic, setAuthentic] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

    if (token) {
      return setAuthentic(true);
    }
  }, [authentic]);
  return (
    <Routes>
      <Route
        exact
        path="/cadastro"
        element={<Cadastro authentic={authentic} />}
      />
      <Route
        exact
        path="/login"
        element={<Login authentic={authentic} setAuthentic={setAuthentic} />}
      />
      <Route
        path="/"
        element={
          <Dashboard authentic={authentic} setAuthentic={setAuthentic} />
        }
      />
    </Routes>
  );
}
export default Rotas;
