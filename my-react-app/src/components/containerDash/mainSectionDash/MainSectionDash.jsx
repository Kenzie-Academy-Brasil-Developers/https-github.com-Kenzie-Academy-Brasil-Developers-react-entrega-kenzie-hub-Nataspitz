import { StyleMainSectionDash } from "./StyleMainSectionDash";
import add from "../../../assets/add.png"

export function MainSectionDash() {
    return(
        <StyleMainSectionDash>
           <div>
                <h2>Tecnologias</h2>
                <div>
                    <img src={add} alt="Adiciona uma nova tecnologia" />
                </div>
           </div>
        </StyleMainSectionDash>
    )
}