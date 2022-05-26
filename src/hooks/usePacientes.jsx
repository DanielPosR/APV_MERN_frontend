import { useContext } from "react";
import PacientesContext from "../context/PacientesProvider";


const usePacientes = () => {

return useContext(PacientesContext);//useContext sirve para extraer los datos o valores de AuthContext
}


export default usePacientes;