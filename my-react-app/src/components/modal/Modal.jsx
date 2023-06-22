import { useContext } from "react";
import { StyleModal } from "./StyleModal";
import { TechContext } from "../../providers/TechContext";


export function Modal({children, title}) {
    const { setIsOpen } = useContext(TechContext)
    console.log();
    
    return(
        <StyleModal>
                {children}
        </StyleModal>
    )
}