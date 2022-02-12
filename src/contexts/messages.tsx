import { createContext, useState } from "react";
import { message, ProviderProps, messagesContext } from "src/ts";

export const MessagesContext = createContext<messagesContext | undefined>(
  undefined
);

export const MessagesProvider = ({ children }: ProviderProps) => {
  const [messages, setMessages] = useState<message[]>([]);

  const handleCacheMessage = (message: message) => {
    setMessages((prevState) => {
      return [...prevState, message];
    });
  };

  const contextValue = {
    messages: messages,
    cacheMessage: handleCacheMessage,
  };

  return (
    <MessagesContext.Provider value={contextValue}>
      {children}
    </MessagesContext.Provider>
  );
};
