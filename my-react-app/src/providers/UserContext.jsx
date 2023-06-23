import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/Api";
import { toast } from "react-toastify";

export const UserContext = createContext({})

export function UserProvider({children}) {
    const navFromPages = useNavigate()
    const [user, setUser] = useState(null)
    const token = localStorage.getItem("@TOKEN")
    const idLocalStorege =localStorage.getItem("@USERID")
    const [ loading, setLoading] = useState(false)
    
    async function loginUser(form) {
        try {
            const { data } = await api.post("/sessions", form)
            const userId = data.user.id
             localStorage.setItem("@TOKEN", (data.token))
             localStorage.setItem("@USERID",(userId))
                setUser(data.user)
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

    useEffect(() =>{
        async function infoPerfil() {

            if (token && idLocalStorege) {
                try {
                    const { data } = await api.get(`/profile`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                     }
                    })
                    setUser(data)
                    navFromPages("/perfil")
                } catch (error) {
                    console.error(error);
                }
            
            }
        }
        infoPerfil()
    }, [])

    function returnHome() {
        localStorage.clear()
        navFromPages("/")
    }

    return(
        <UserContext.Provider value={{ loginUser , registerUser, user, returnHome, setUser }}>
            {children}
        </UserContext.Provider>
    )
}