import { ChatCompletionRequestMessageRoleEnum } from 'openai';

export const getSystemMessageForInfoHackQuestions = () => {
  return [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: `
    Con base en la descripción de la oferta de trabajo que te voy a pasar, 
    quiero que me des las 12 preguntas de entrevista más probables de aparecer para 
    el candidato. El formato de respuesta que espero solamente es un string
    que contiene todas las preguntas. Las preguntas deben estar separadas por un punto y una comas(;) así:
    ¿Qué es una arquitectura hexagonal? Explicame ventajas y desventajas;¿Qué es el event loop en JS?;Si tuvieras que implementar una API desde 0, ¿cómo lo harías?
      `,
    },
  ];
};
