import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../services/Api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "./UserContext";

export const TechContext = createContext({})

export function TechProvider({children}) {
    const [ isOpen, setIsOpen ] = useState(null)
    const [ modalType, setModalType] = useState("")
    const token = localStorage.getItem("@TOKEN")
    const { user } = useContext(UserContext)
    const [ techs, setTechs ] = useState(user.techs)

    
    
    async function newTech(form) {
        try {
            const { data } = await api.post("/users/techs", form, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }) 
            setTechs([ ...techs, data])
            toast.success("Nova tecnologia adicionada")
        } catch (error) {
            toast.error("Essa tecnologia já foi cadastrada")
        }
    }


    return(
        <TechContext.Provider value={{ isOpen, setIsOpen, modalType, setModalType, newTech, techs }}>
            {children}
        </TechContext.Provider>
    )
}