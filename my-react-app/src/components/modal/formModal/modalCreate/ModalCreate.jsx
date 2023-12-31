import { useContext } from "react";
import { StyleModalCreate } from "./StyleModalCreate";
import { TechContext } from "../../../../providers/TechContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { modalSchema } from "../../ModalSchema";
import { StyleRestriction } from "../../../form/StyleRestriction";
import { StyleHeader } from "../StyleHeader";


export function ModalCreate() {
    const { setIsOpen, newTech } = useContext(TechContext)
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(modalSchema)
    })

    function submitCreate(form) {
        newTech(form)
        setIsOpen(false)
    }

    return(
        <StyleModalCreate role="dialog">
            <StyleHeader>
                <h3>Cadastre Tecnologia</h3>
                <button onClick={() => setIsOpen(false)}>X</button>
            </StyleHeader>
            <form onSubmit={handleSubmit(submitCreate)}>
                <label htmlFor="text">Nome</label>
                <input type="text" placeholder="Digite aqui" { ...register("title")}/>
                {errors.title ? <StyleRestriction>{ errors.title.message}</StyleRestriction>: null}
                <label htmlFor="select">Selecione status</label>
                <select name="tech" { ...register("status") } >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <button type="submit">Cadastrar Tecnologia</button>
            </form>
        </StyleModalCreate>
    )
}