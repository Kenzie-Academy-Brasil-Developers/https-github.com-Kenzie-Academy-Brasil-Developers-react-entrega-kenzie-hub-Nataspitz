import { useContext,  useState } from "react";
import { createContext } from "react";
import { api } from "../services/Api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export const TechContext = createContext({})

export function TechProvider({children}) {
    const [ isOpen, setIsOpen ] = useState(null)
    const [ modalType, setModalType] = useState("")
    const token = localStorage.getItem("@TOKEN")
    const { user } = useContext(UserContext)
    const [ techs, setTechs ] = useState(user.techs)
    const [ card, setCard] = useState(null)

    
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
    

   async function deleteTech(techId) {
       try {
            await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechs((techs) => techs.filter(tech => tech.id !== techId))  
            toast.success("Tecnologia deletada com sucesso")
            setIsOpen(false)
        } catch (error) {
            console.log(error);
        }
    }
    
    async function editTech(techId, form) {
        try {
            let currentTechs = [...techs]
            currentTechs = currentTechs.filter(tech => tech.id !== techId)
           const { data } = await api.put(`/users/techs/${techId}`, form, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTechs([...currentTechs, data])
           toast.success("Tecnologia editada com sucesso")
           setIsOpen(false)     
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <TechContext.Provider value={{ isOpen, setIsOpen, modalType, setModalType, newTech, techs, deleteTech, setCard, card, deleteTech, editTech }}>
            {children}
        </TechContext.Provider>
    )
}