import { ChatCompletionRequestMessageRoleEnum } from 'openai';

export const getSystemMessageForInfoHackRecommendations = () => {
  return [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: `Quiero que cuando te pase la descripción de una oferta de trabajo y una hoja de vida en formato texto,
me des una lista de cambios para mejorar la hoja de vida, dando ejemplos.
El formato de respuesta que espero solamente es un string
que contiene todos los cambios. Las cambios deben estar separadas por punto y coma, así:
Comienza tu hoja de vida con declaraciones objetivas que resalten tu pasión por la profesión. Por ejemplo: "asesor de ventas con fuerte interes en el sector comercial";Resalta tus años de experiencia. Por ejemplo: Desarrollador con 5 años de experiencia
`,
    },
  ];
};
