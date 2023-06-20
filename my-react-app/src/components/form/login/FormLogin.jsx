import { useContext } from "react";
import { StyleForm } from "../StyleForm";
import { StyleRestriction } from "../StyleRestriction";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./LoginSchema";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../providers/UserContext";

export function FormLogin() {
    const { loginUser } = useContext(UserContext)

        const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginSchema)
    })

    function subimtLogin( form) {
        loginUser(form);
    }

    return(
        <StyleForm onSubmit={handleSubmit(subimtLogin)} noValidate>
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