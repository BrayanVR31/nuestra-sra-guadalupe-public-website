import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  sendSuggestion: defineAction({
    input: z.object({
      name: z
        .string({ required_error: "El nombre es obligatorio" })
        .trim()
        .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
      email: z
        .string({ required_error: "El email es obligatorio" })
        .email("Correo inválido"),
      subject: z
        .string({ required_error: "El email es obligatorio" })
        .trim()
        .min(3, { message: "El asunto debe tener al menos 3 caracteres" }),
      message: z
        .string({ required_error: "El email es obligatorio" })
        .trim()
        .min(10, "Tu mensaje es muy corto"),
    }),
    handler: async (inputs) => {
      console.log(inputs);
      return "Submit";
    },
    accept: "json",
  }),
};
