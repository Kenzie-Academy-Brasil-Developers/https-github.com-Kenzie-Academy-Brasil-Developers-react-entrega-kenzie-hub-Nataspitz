import { useContext } from "react";
import { TechContext } from "../../../../providers/TechContext";
import { StyleModalEdit } from "./StyleModalEdit";

export function ModalEdit() {
    const { setIsOpen } = useContext(TechContext)
    return(
        <StyleModalEdit role="dialog">
            <header>
                <h3>Tecnologia Detalhes</h3>
                <button onClick={() => setIsOpen(false)}>X</button>
            </header>
            <form>
                <p>Nome da Tecnologia</p>
                <div>
                    <span></span>
                </div>
                <label htmlFor="select">Status</label>
                <select name="tech" >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <div>
                    <button type="submit">Salvar alterações</button>
                    <button>Excluir</button>
                </div>
            </form>

        </StyleModalEdit>
    )
}