import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/Api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const UserContext = createContext({})

export function UserProvider({children}) {
    const navFromPages = useNavigate()

    async function login(form) {
        try {
            const { data } = await api.post("/sessions", form)
            const userId = data.user.id
    
          localStorage.setItem("@TOKEN", JSON.stringify(data.token))
          localStorage.setItem("@USERID", JSON.stringify(userId))

            setTimeout(() =>{
                navFromPages(`/perfil`)
            },1000)
        } catch (error) {
            toast.error("E-mail ou senha inválida")
        }
    }



    return(
        <UserContext.Provider value={{ login }}>
            {children}
        </UserContext.Provider>
    )
}