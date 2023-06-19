import { useContext } from "react";
import { StyleForm } from "../StyleForm";
import { StyleRestriction } from "../StyleRestriction";


export function FormLogin() {
    const {  } = useContext

    return(
        <StyleForm onSubmit={handleSubmit(subimt)} noValidate>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Ex: ....@gmail.com" { ...register("email") }/>
            {errors.email ? <StyleRestriction>{ errors.email.message }</StyleRestriction> : null }
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="********" { ...register("password") }/>
            {errors.password ? <StyleRestriction>{ errors.password.message }</StyleRestriction> : null }
            <button className="login" type="submit">Entrar</button>
        </StyleForm>
    )
}