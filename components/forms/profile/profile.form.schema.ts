import { ACCEPTED_IMAGE_TYPES, MAX_PROFILE_PIC_FILE_SIZE } from "@/env";
import { z } from "zod";

export const consultorFormSchema = z.object({
    nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
    email: z.string().email("Email inválido"),
    telefone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Telefone inválido"),
    cidade: z.string().min(2, "Cidade é obrigatória"),
    estado: z.string().length(2, "Use a sigla do estado (ex: SP)"),
    cep: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido"),
    biografia: z.string()
      .min(100, "A biografia deve ter pelo menos 100 caracteres")
      .max(1000, "A biografia deve ter no máximo 1000 caracteres"),
    tempoExperiencia: z.string().min(1, "Tempo de experiência é obrigatório"),
    precoBase: z.string().regex(/^\d+$/, "Preço deve ser um número válido"),
    especialidades: z.string().min(1, "Selecione pelo menos uma especialidade"),
    certificacoes: z.string().min(1, "Liste suas principais certificações"),
    fotoPerfil: z
      .custom<FileList>()
      .refine((files) => files?.length >= 1, "Foto de perfil é obrigatória")
      .refine(
        (files) => files?.[0]?.size <= MAX_PROFILE_PIC_FILE_SIZE,
        "Tamanho máximo de 5MB"
      )
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Formato de imagem inválido. Use JPG, PNG ou WebP"
      ),
  })