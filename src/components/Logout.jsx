import { useNavigate } from "react-router-dom";
import { RemoverUsuarioDeLocalStorage } from "../logic"

export const Logout = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        RemoverUsuarioDeLocalStorage();
        navigate('/login')
    }
    return (
        <button onClick={handleClick}>Logout</button>
    )
}
