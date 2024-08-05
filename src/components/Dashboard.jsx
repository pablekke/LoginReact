import { Outlet, useNavigate } from "react-router-dom"
import { UsuarioEnLocalStorage } from "../logic";
import { useEffect } from "react";


export const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    !UsuarioEnLocalStorage().id ? navigate("/login") : null
  }, [navigate])
  
  return (
    <>
      <div>Dashboard</div>
      <Outlet></Outlet>
    </>
  )
}
