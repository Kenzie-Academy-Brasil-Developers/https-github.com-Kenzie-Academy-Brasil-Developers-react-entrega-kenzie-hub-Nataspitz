import { useContext } from "react";
import { TechContext } from "../../../../providers/TechContext";
import { StyleModalEdit } from "./StyleModalEdit";
import { useForm } from "react-hook-form";
import { resolvePath } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { modalSchema } from "../../ModalSchema";
import { StyleRestriction } from "../../../form/StyleRestriction";

export function ModalEdit() {
    const { setIsOpen, card, deleteTech, editTech} = useContext(TechContext)
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(modalSchema)
})

function editSubmit(form) {
    editTech(card.id, form);
}

    return(
        <StyleModalEdit role="dialog">
            <header>
                <h3>Tecnologia Detalhes</h3>
                <button onClick={() => setIsOpen(false)}>X</button>
            </header>
            <form onSubmit={handleSubmit(editSubmit)}>
                <p>Nome da Tecnologia</p>
                <div>
                    <span>{card.title}</span>
                </div>
                <label htmlFor="select">Status</label>
                <select name="tech" { ...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                {errors.status ? <StyleRestriction>{errors.status.message}</StyleRestriction>: null}
                <div>
                    <button type="submit">Salvar alterações</button>
                    <button onClick={() => deleteTech(card.id)}>Excluir</button>
                </div>
            </form>

        </StyleModalEdit>
    )
}