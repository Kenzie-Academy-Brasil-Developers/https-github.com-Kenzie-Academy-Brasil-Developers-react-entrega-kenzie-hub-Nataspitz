import { StyleForm } from "../StyleForm";



export function FormLogin() {
    return(
        <StyleForm>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Ex: ....@gmail.com"/>
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="********" />
            <button className="login" type="submit">Entrar</button>
        </StyleForm>
    )
}