import { createContext, useState } from "react";
import { contact, ProviderProps, chatContext } from "src/ts";

export const ChatContext = createContext<chatContext | undefined>(undefined);

export const ChatProvider = ({ children }: ProviderProps) => {
  const [chat, setChat] = useState<contact | any>();

  const handleSetChat = (contact: contact) => {
    setChat(contact);
  };

  const contextValue = {
    contact: chat,
    setChat: handleSetChat,
  };

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};
