import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/Navbar"

const Dashboard = () => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/login");
  }, [logout]);

  const logoutHandle = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };
  return (
    <><NavBar />
      <div className="container mx-auto">
        
        <h1>Hello world!</h1>
        <button onClick={logoutHandle} className="bg-orange-500 px-2 py-3">
          Logout
        </button>
      </div>
    </>
  )
}
export default Dashboard;