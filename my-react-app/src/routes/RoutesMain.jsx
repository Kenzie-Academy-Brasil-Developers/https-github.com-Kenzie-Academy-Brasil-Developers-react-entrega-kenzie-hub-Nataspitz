import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/register/Register";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { UserProvider } from "../providers/UserContext";
import { DashboardProtect } from "../components/protectRoutes/DashboardProtect";
import { TechProvider } from "../providers/TechContext";

export function RoutesMain() {
    return(
        <UserProvider>
            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="/cadastro" element={ <Register /> }/>
                <Route path="/perfil" element={ <DashboardProtect /> }>
                    <Route index element={ <TechProvider>  <Dashboard />  </TechProvider>} />
                </ Route >
            </Routes>
        </UserProvider>
    )
}