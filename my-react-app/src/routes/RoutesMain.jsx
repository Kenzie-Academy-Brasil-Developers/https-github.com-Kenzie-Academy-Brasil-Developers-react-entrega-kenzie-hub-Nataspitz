import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/register/Register";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { useState } from "react";

export function RoutesMain() {

    return(
        <Routes>
            <Route path="/" element={ <Login /> }/>
            <Route path="/cadastro" element={ <Register /> }/>
            <Route path="/perfil" element={ <Dashboard /> }/>
        </Routes>
    )
}