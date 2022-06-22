import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import AddingTech from "../../Components/AddingTech";
import Button from "../../Components/Button";
import Header from "../../Components/HeaderDash";
import Hr from "../../Components/Hr";
import Main from "../../Components/MainDash";
import NavFixed from "../../Components/NavFixed";

function Dashboard({ authentic, setAuthentic }) {
  let user = JSON.parse(localStorage.getItem("@kenzieHub:user"));
  const [userTechs, setUserTechs] = useState([]);
  const [isAddingTech, setIsAddingTech] = useState(false);

  useEffect(() => {
    if (user) {
      setUserTechs(user.techs);
    }
  }, []);

  const statesAddingTech = [
    isAddingTech,
    setIsAddingTech,
    userTechs,
    setUserTechs,
  ];
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
      {isAddingTech && <AddingTech statesTech={statesAddingTech} />}
      <Main statesTech={statesAddingTech} />
    </>
  );
}
export default Dashboard;
