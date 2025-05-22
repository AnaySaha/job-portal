import { useContext } from "react"
import AuthContext from "../context/AuthContex/AuthContext"

const useAuth = () =>{
    const context = useContext(AuthContext);
    return context;
}



export default useAuth;