import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import AddingTech from "../../Components/AddingTech";
import Button from "../../Components/Button";
import FluxoCard from "../../Components/FluxoCard";
import Header from "../../Components/HeaderDash";
import Hr from "../../Components/Hr";
import Main from "../../Components/MainDash";
import NavFixed from "../../Components/NavFixed";

function Dashboard({ authentic, setAuthentic }) {
  let user = JSON.parse(localStorage.getItem("@kenzieHub:user"));
  const [userTechs, setUserTechs] = useState([]);
  const [isAddingTech, setIsAddingTech] = useState(false);
  const [isFluxoCard, setIsFluxoCard] = useState(false);
  const [fluxoContent, setFluxoContent] = useState({});

  const statesFluxo = [
    isFluxoCard,
    setIsFluxoCard,
    fluxoContent,
    setFluxoContent,
  ];

  const statesAddingTech = [
    isAddingTech,
    setIsAddingTech,
    userTechs,
    setUserTechs,
  ];

  useEffect(() => {
    if (user) {
      setUserTechs(user.techs);
    }
  }, []);
  let navigate = useNavigate();
  if (!authentic) {
    navigate("/login");
    return <Navigate to="/login" />;
  }
  return (
    <>
      <NavFixed setAuthentic={setAuthentic} />
      <Hr />
      <Header user={user} />
      {isFluxoCard && (
        <FluxoCard statesFluxo={statesFluxo} statesTech={statesAddingTech} />
      )}
      {isAddingTech && <AddingTech statesTech={statesAddingTech} />}
      <Main statesFluxo={statesFluxo} statesTech={statesAddingTech} />
    </>
  );
}
export default Dashboard;
