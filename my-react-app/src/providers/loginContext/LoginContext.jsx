import { createContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../components/form/login/LoginSchema";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../services/Api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const LoginContext = createContext({})

export function LoginProvider({children}) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginSchema)
    })
    const navFromDashboard = useNavigate()

    async function login(form) {
        try {
            const { data } = await api.post("/sessions", form)
            const userId = data.user.id
    
           localStorage.setItem("@TOKEN", JSON.stringify(data.token))
          localStorage.setItem("@USERID", JSON.stringify(userId))

            setTimeout(() =>{
                navFromDashboard(`/perfil`)
            },1000)
        } catch (error) {
            toast.error("E-mail ou senha inválida")
        }
    }

    function subimt(form) {
        login(form);
    }

    return(
        <LoginContext.Provider value={{ register, handleSubmit, errors, subimt }}>
            {children}
        </LoginContext.Provider>
    )
}