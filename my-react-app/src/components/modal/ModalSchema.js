import { z } from "zod";

export const modalSchema = z.object({
    title: z.string().nonempty("*Digite uma tecnologia"),
    status: z.string().nonempty("*Selecione um status")
})