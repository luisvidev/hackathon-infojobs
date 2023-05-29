import { ChatCompletionRequestMessageRoleEnum } from 'openai';

export const getSystemMessageForInfoHackQuestions = () => {
  return [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: `
    Con base en la descripción de la oferta de trabajo que te voy a pasar, 
    quiero que me des las 12 preguntas de entrevista más probables de aparecer para 
    el candidato. El formato de respuesta que espero solamente es un string (máximo 100 carácteres)
    que contiene todas las preguntas. Las preguntas deben estar separadas por un punto y una comas(;) así:
    '¿Cuál es tu experiencia en desarrollo Full Stack con React?;¿Cuál es tu nivel de inglés?'
      `,
    },
  ];
};
