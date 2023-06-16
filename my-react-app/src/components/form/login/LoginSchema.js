import { string, z } from "zod";

export const LoginSchema = z.object({
    email: string().nonempty("*E-mail é obrigatório".email("*email inválido")),
    password: string().nonempty("*Senha é obrigatório")
})