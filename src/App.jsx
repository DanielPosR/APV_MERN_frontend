import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import RutaProtegidaLayout from "./layout/RutaProtegidaLayout";


import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import OlvidePassword from "./paginas/OlvidePassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import NuevoPassword from "./paginas/NuevoPassword";
import AdministrarPacientes from "./paginas/AdministrarPacientes";
import EditarPerfil from "./paginas/EditarPerfil";
import CambiarPassword from "./paginas/CambiarPassword";


import { AuthProvider } from "./context/AuthProvider";
import { PacientesProvider } from "./context/PacientesProvider";

import React from "react";



function App() {

  return (
    <BrowserRouter>

      <AuthProvider>

        <PacientesProvider>

          <Routes>

            {/**Rutas que conforman la autenticacionde los usuarios y registro de cuentas */}
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevoPassword />} />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>


            {/**RUTAS PROTEGIDAS, ES DECIR SOLO USUARIOS AUTENTICADOS PUEDEN ACCEER A ELLAS */}
            <Route path="/admin" element={<RutaProtegidaLayout />}>
              <Route index element={<AdministrarPacientes />} />
              <Route path="perfil" element={<EditarPerfil />} />
              <Route path="cambiar-password" element={<CambiarPassword />} />
            </Route>

          </Routes>

        </PacientesProvider>

      </AuthProvider>

    </BrowserRouter>
  )
}

export default App
