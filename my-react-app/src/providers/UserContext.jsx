import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/Api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const UserContext = createContext({})

export function UserProvider({children}) {
    const navFromPages = useNavigate()

    async function loginUser(form) {
        try {
            const { data } = await api.post("/sessions", form)
            const userId = data.user.id
             localStorage.setItem("@TOKEN", (data.token))
             localStorage.setItem("@USERID",(userId))
            setTimeout(() =>{
                navFromPages(`/perfil`)
            },1000)
        } catch (error) {
            toast.error("E-mail ou senha inválida")
        }
    }

    async function registerUser(form) {
        try {
            await api.post("/users", form)
            toast.success("Sua conta foi criada com sucesso")
            setTimeout(() =>{
                navFromPages("/")
            }, 1000)
        } catch (error) {
            toast.error("dados já cadastrados")          
        }
    }



    return(
        <UserContext.Provider value={{ loginUser , registerUser }}>
            {children}
        </UserContext.Provider>
    )
}