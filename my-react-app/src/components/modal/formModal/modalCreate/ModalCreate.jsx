import { useContext } from "react";
import { StyleModalCreate } from "./StyleModalCreate";
import { TechContext } from "../../../../providers/TechContext";


export function ModalCreate() {
    const { setIsOpen } = useContext(TechContext)
    return(
        <StyleModalCreate role="dialog">
            <header>
                <h3>Cadastre Tecnologia</h3>
                <button onClick={() => setIsOpen(false)}>X</button>
            </header>
            <form>
                <label htmlFor="text">Nome</label>
                <input type="text" placeholder="Digite aqui"/>
                <label htmlFor="select">Selecione status</label>
                <select name="tech" >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <button>Cadastrar Tecnologia</button>
            </form>
        </StyleModalCreate>
    )
}