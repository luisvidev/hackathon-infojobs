'use client';
import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ChatBoxMessage } from '../../../types';
import { formatTimestamp } from '@utils/formatTimestamp';
import { Typing } from '@components/ui/Typing/Typing';
import { getChatMessageRequest } from '@services/website/getChatMessageRequest';
import styles from './style.module.css';

interface Data {
  message: string;
  serverError?: string;
}

const INITIAL_MESSAGE: ChatBoxMessage = {
  id: 1,
  content:
    '¡Hola! Soy el asistente virtual de InfoJobs. ¿En qué puedo ayudarte hoy?',
  sender: 'bot',
  timestamp: new Date().getTime(),
};

export const ChatBox = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<Data>();
  const [messages, setMessages] = useState<ChatBoxMessage[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Scroll to the bottom of the chat container whenever a new message is added
    if (chatContainerRef.current) {
      const chatContainer = chatContainerRef.current;
      const lastMessage = chatContainer.lastElementChild as HTMLElement;
      lastMessage.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const onSubmit: SubmitHandler<Data> = async (data) => {
    setIsLoading(true);
    clearErrors();
    const timestamp = new Date().getTime();
    const message = data.message.trim();
    const newMessage: ChatBoxMessage = {
      id: timestamp,
      content: data.message,
      sender: 'user',
      timestamp,
    };
    setMessages((prev) => [...prev, newMessage]);
    reset();

    try {
      const newBotMessage = await getChatMessageRequest({ message });
      const timestampBotMessage = new Date().getTime();
      const newMessage: ChatBoxMessage = {
        id: timestampBotMessage,
        content: newBotMessage.response,
        sender: 'bot',
        timestamp: timestampBotMessage,
      };
      setMessages((prev) => [...prev, newMessage]);
    } catch (error) {
      setError('serverError', {
        message: (error as Error)?.message || 'Server error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.ctrlKey && event.key === 'Enter') {
      event.preventDefault();
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div>
      <div className="max-w-lg mx-auto bg-white shadow-2xl rounded-lg pt-5">
        {/* <!-- Chat messages --> */}
        <div
          ref={chatContainerRef}
          style={{ height: '500px' }}
          className={`overflow-y-auto px-4 py-2 ${styles.scrollableContainer}`}
        >
          {messages.map(({ id, content, sender, timestamp }) => {
            const isBot = sender === 'bot';
            return (
              <div
                className={`flex ${
                  isBot ? 'flex-row' : 'flex-row-reverse'
                } items-start mb-4`}
                key={id}
              >
                <div
                  style={{
                    backgroundImage: `url(${
                      isBot ? 'assets/logo-sm.svg' : 'assets/user.png'
                    })`,
                    backgroundSize: 'cover',
                  }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200"
                />
                <div className={`${isBot ? 'ml-3' : 'mr-3'} flex flex-col`}>
                  <div
                    className={`${
                      isBot ? 'bg-gray-200' : 'bg-primary-l4'
                    } p-2 rounded-lg inline-block`}
                  >
                    <p className="text-sm leading-5 text-gray-700">{content}</p>
                  </div>
                  <div className={`${isBot ? 'text-left' : 'text-right'}`}>
                    <p className="text-xs leading-4 text-gray-500 mt-1">
                      {formatTimestamp(timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {isLoading && (
          <div className="my-2 pl-4">
            <Typing />
          </div>
        )}
        {/* <!-- Chat input --> */}
        <div className="bg-gray-100 px-4 py-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center">
              <textarea
                {...register('message')}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                className="overflow-hidden w-full px-3 py-2 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Escribe tu pregunta..."
              />
              <button
                type="submit"
                disabled={isLoading}
                className="disabled:bg-gray-d1 ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      {errors?.serverError && (
        <div className="w-full flex justify-center">
          <span className="block text-error font-bold text-sm mt-3">
            {errors.serverError.message ?? 'unknown'}
          </span>
        </div>
      )}
    </div>
  );
};
