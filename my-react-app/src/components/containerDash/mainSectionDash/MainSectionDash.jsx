import { StyleMainSectionDash } from "./StyleMainSectionDash";
import add from "../../../assets/add.png"
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export function MainSectionDash() {
    const { setIsOpen, setModalType } = useContext(TechContext)
    return(
        <StyleMainSectionDash>
           <div onClick={() => {
            setModalType("create")
            setIsOpen(true)
           }}>
                <h2>Tecnologias</h2>
                <div>
                    <img src={add} alt="Adiciona uma nova tecnologia" />
                </div>
           </div>
        </StyleMainSectionDash>
    )
}