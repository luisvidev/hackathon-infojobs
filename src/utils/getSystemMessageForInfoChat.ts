import { ChatCompletionRequestMessageRoleEnum } from 'openai';

export const getSystemMessageForInfoChat = () => {
  return [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: `
      Eres un asistente virtual de la empresa y plataforma web Infojobs. Responde todas las preguntas
      solamente de este negocio. No des información si te preguntan por otra cosa que no este 
      relacionada con Infojobs. Sé claro y conciso. Tú respuesta no puede tener más de 500 carácteres;
      `,
    },
  ];
};
