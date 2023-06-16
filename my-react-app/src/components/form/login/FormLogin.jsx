import { useForm } from "react-hook-form";
import { StyleForm } from "../StyleForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./LoginSchema";
import { StyleRestriction } from "../StyleRestriction";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/Api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function FormLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginSchema)
    })
    const navFromDashboard = useNavigate()

    async function login(form) {
        try {
            const { data } = await api.post("/sessions", form)
            const userId = data.user.id
    
            localStorage.setItem("@TOKEN", JSON.stringify(data.token))
            localStorage.setItem("@USERID", JSON.stringify(userId))

            setTimeout(() =>{
                navFromDashboard(`/perfil`)
            },1000)
        } catch (error) {
            toast.error("E-mail ou senha inválida")
        }
    }

    function subimt(form) {
        login(form);
        console.log();
    }

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