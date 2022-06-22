import { Container } from "./style";
import logo from "../../imgs/Logo.png";
import Button from "../Button";
import Hr from "../Hr";

import { Navigate, useNavigate } from "react-router-dom";

function NavFixed({ setAuthentic }) {
  let navigate = useNavigate();

  function desloga() {
    localStorage.clear();
    setAuthentic(false);
    navigate("/login");
  }

  return (
    <Container>
      <div className="logoLogout">
        <img src={logo} alt="kenziehub" />
        <Button onClick={desloga} lilButt blackSchema>
          Sair
        </Button>
      </div>
      <Hr />
    </Container>
  );
}
export default NavFixed;
