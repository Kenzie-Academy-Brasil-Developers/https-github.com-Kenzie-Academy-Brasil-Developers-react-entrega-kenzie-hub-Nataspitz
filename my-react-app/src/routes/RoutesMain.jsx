import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/register/Register";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { UserProvider } from "../providers/UserContext";


export function RoutesMain() {

    return(
        <UserProvider>
        <Routes>
                <Route path="/" element={ <Login /> }/>
                <Route path="/cadastro" element={ <Register /> }/>
                <Route path="/perfil" element={ <Dashboard /> }/>
        </Routes>
        </UserProvider>
    )
}