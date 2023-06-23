import { StyleMainSectionDash } from "./StyleMainSectionDash";
import add from "../../assets/add.png"
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { List } from "./list/List";

export function MainSectionDash() {
    const { setIsOpen, setModalType } = useContext(TechContext)

   
    return(
        <StyleMainSectionDash>
           <div>
                <h2>Tecnologias</h2>
                <div onClick={() => {
                       setModalType("create")
                       setIsOpen(true)
                        }}>
                    <img src={add} alt="Adiciona uma nova tecnologia" />
                </div>
           </div>
           <List/>
        </StyleMainSectionDash>
    )
}