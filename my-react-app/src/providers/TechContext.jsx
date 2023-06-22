import { useState } from "react";
import { createContext } from "react";

export const TechContext = createContext({})

export function TechProvider({children}) {
    const [ isOpen, setIsOpen ] = useState(null)
    const [ modalType, setModalType] = useState("")


    return(
        <TechContext.Provider value={{ isOpen, setIsOpen, modalType, setModalType }}>
            {children}
        </TechContext.Provider>
    )
}