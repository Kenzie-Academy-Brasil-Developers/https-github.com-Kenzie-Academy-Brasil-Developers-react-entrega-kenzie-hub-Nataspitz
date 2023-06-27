import { useContext } from "react";
import { TechContext } from "../../../../providers/TechContext";
import { StyleModalEdit } from "./StyleModalEdit";
import { useForm } from "react-hook-form";
import { StyleHeader } from "../StyleHeader";

export function ModalEdit() {
    const { setIsOpen, card, deleteTech, editTech} = useContext(TechContext)
    const { register, handleSubmit} = useForm()

function editSubmit(form) {
    editTech(card.id, form)
    setIsOpen(false)
}

    return(
        <StyleModalEdit role="dialog">
            <StyleHeader>
                <h3>Tecnologia Detalhes</h3>
                <button onClick={() => setIsOpen(false)}>X</button>
            </StyleHeader>
            <form onSubmit={handleSubmit(editSubmit)}>
                <p>Nome da Tecnologia</p>
                <div className="div__inputEdit">
                    <span>{card.title}</span>
                </div>
                <label htmlFor="select">Status</label>
                <select defaultValue={card.status} name="tech" { ...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <div className="buttons__form">
                    <button id="edit_2" onClick={() => deleteTech(card.id)}>Excluir</button>
                    <button id="edit_1" type="submit">Salvar alterações</button>
                </div>
            </form>

        </StyleModalEdit>
    )
}