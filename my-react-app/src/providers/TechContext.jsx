import { useState } from "react";
import { createContext } from "react";
import { api } from "../services/Api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const TechContext = createContext({})

export function TechProvider({children}) {
    const [ isOpen, setIsOpen ] = useState(null)
    const [ modalType, setModalType] = useState("")
    const token = localStorage.getItem("@TOKEN")

   async function newTech(form) {
    try {
        const { data } = await api.post("/users/techs", form, {
            headers: {
                 Authorization: `Bearer ${token}`
            }
        }) 
        toast.success("Nova tecnologia adicionada")
        isOpen(false)
    } catch (error) {
        toast.error("Essa tecnologia já foi cadastrada")
    }
    }


    return(
        <TechContext.Provider value={{ isOpen, setIsOpen, modalType, setModalType, newTech }}>
            {children}
        </TechContext.Provider>
    )
}