import { useContext } from "react";
import AuthContext from "../context/AuthProvider";


const useAuth = () => {

return useContext(AuthContext);//useContext sirve para extraer los datos o valores de AuthContext
}


export default useAuth;