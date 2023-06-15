import { StyleForm } from "../StyleForm";
import { useForm } from "react-hook-form";
import { RegitserSchema } from "./RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyleRestriction } from "../StyleRestriction";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/Api";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export function FormRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(RegitserSchema)
    })

    const navFromLogin = useNavigate()

   async function registerUser(form) {
        try {
            const { data } = await api.post("/users", form)
            console.log(data);
            toast.success("Sua conta foi criada com sucesso")
            setTimeout(() =>{
                navFromLogin("/")
            }, 1000)
        } catch (error) {
            console.error(error)
        }
    }

    async function submit(form) {
        registerUser(form);
    }


    return(
        <StyleForm onSubmit={handleSubmit(submit)} noValidate>
            <label htmlFor="text">Nome</label>
            <input type="text" placeholder="Digite aqui seu nome" { ...register("name") }/>
            {errors.name ? <StyleRestriction>{ errors.name.message }</StyleRestriction> : null }
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Digite aqui seu email" { ...register("email") }/>
            {errors.email ? <StyleRestriction>{ errors.email.message }</StyleRestriction> : null }
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite aqui sua senha"  { ...register("password") }/>
            {errors.password ? <StyleRestriction>{ errors.password.message }</StyleRestriction> : null }
            <label htmlFor="password">Confirmação de senha</label>
            <input type="password"placeholder="Digite novamente sua senha"  { ...register("confirm_password") }/>
            {errors.confirm_password ? <StyleRestriction>{ errors.confirm_password.message }</StyleRestriction> : null }
            <label htmlFor="text">Bio</label>
            <input type="text" placeholder="Fale sobre você"  { ...register("bio") }/>
            {errors.bio ? <StyleRestriction>{ errors.bio.message }</StyleRestriction> : null }
            <label htmlFor="tel">Contato</label>
            <input type="tel" placeholder="Opção para contato"  { ...register("contact") }/>
            {errors.contact ? <StyleRestriction>{ errors.bio.message }</StyleRestriction> : null }
            <label htmlFor="select">Selecionar módulo</label>
            <select   { ...register("course_module") }>
                <option value="">Selecione aqui</option>
                <option value="Primeiro módulo">Primeiro módulo</option>
                <option value="Segundo módulo">Segundo módulo</option>
                <option value="Terceiro módulo">Terceiro módulo</option>
                <option value="Quarto módulo">Quarto módulo</option>
                <option value="Quinto módulo">Quinto módulo</option>
                <option value="Sexto módulo">Sexto módulo</option>
            </select>
            {errors.course_module ? <StyleRestriction>{ errors.course_module.message }</StyleRestriction> : null }
            <button className="register" type="submit">Cadastrar</button>
        </StyleForm>
    )
}