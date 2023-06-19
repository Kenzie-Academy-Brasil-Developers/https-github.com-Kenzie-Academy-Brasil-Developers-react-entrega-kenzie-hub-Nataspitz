import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().nonempty("*E-mail é obrigatório").email("O e-mail deve estar no formato correto"),
    password: z.string().nonempty("*Senha é obrigatório")
})