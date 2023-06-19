import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, "*O nome precisa de pelo 3 caracteres."),
    email: z.string().min(1,"*O e-mail é obrigatório.").email("*Forneça um e-mail válido."),
    password: z.string().min(8, "*A senha deve conter no mínimo 8 caracteres")
    .regex(/(?=.*?[A-Z])/, "*É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "*É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[#?!@$%^&*-])/, "*É necessário pelo menos um caracter especial (@#%$-)")
    .regex(/(?=.*?[0-9])/, "*É necessário pelo menos um número"),
    confirm_password: z.string().min(1, "*Por favor confirme sua senha"),
    bio: z.string().min(10, "*Escreva mais sobre você"),
    contact: z.string().length(11, "*O telefone deve conter o DDD"),
    course_module: z.string().nonempty("*Selecione um módulo"),
}).refine(({ password, confirm_password }) => password === confirm_password, {
    message: "*As senhas são diferentes",
    path: ["confirm_password"]
})