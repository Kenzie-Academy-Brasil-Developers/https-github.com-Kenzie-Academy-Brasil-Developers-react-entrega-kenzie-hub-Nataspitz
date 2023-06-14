import { StyleForm } from "../StyleForm";


export function FormRegister({}) {
    return(
        <StyleForm>
            <label htmlFor="text">Nome</label>
            <input type="text" placeholder="Digite aqui seu nome"/>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Digite aqui seu email"/>
            <label htmlFor="password">Senha</label>
            <input type="pasword" placeholder="Digite aqui sua senha"/>
            <label htmlFor="password">Confirmação de senha</label>
            <input type="text"placeholder="Digite novamente sua senha" />
            <label htmlFor="text">Bio</label>
            <input type="text" placeholder="Fale sobre você"/>
            <label htmlFor="tel">Contato</label>
            <input type="tel" placeholder="Opção para contato"/>
            <label htmlFor="select">Selecionar ódulo</label>
            <select >
                <option value="">Selecione aqui</option>
                <option value="Primeiro módulo">Primeiro módulo</option>
                <option value="Segundo módulo">Segundo módulo</option>
                <option value="Terceiro módulo">Terceiro módulo</option>
                <option value="Quarto módulo">Quarto módulo</option>
                <option value="Quinto módulo">Quinto módulo</option>
                <option value="Sexto módulo">Sexto módulo</option>
            </select>
            <button className="register" type="submit">Cadastrar</button>
        </StyleForm>
    )
}