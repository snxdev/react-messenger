import { createContext, useState } from "react";
import { message, ProviderProps, messagesContext } from "src/ts";
import * as contexts from "src/contexts";
import { useContext, useEffect } from "react";

export const MessagesContext = createContext<messagesContext | undefined>(
  undefined
);

export const MessagesProvider = ({ children }: ProviderProps) => {
  const [messages, setMessages] = useState<message[]>([]);
  const socket = useContext(contexts.SocketContext);
  const contacts = useContext(contexts.ContactContext);

  useEffect(() => {
    socket.on("Event:NewMessage", (incomingMessage) => {
      const senderId = incomingMessage.sender.uuid;
      notifyUser({
        title: `New Message From ${incomingMessage.sender.name}`,
        body: incomingMessage.content,
      });
      handleCacheMessage({
        room: incomingMessage.roomToReceive,
        owner: false,
        message: incomingMessage.content,
        unread: true,
      });
      const inContacts = contacts?.contactsList.find(
        (contact) => contact.uuid === senderId
      );
      if (!inContacts) socket.emit("Event:AddContact", senderId);
    });

    return () => {
      socket.off("Event:NewMessage");
    };
  });

  const notifyUser = (notification: notificationProps) => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted")
        new Notification(notification.title, {
          body: notification.body || "",
        });
    });
  };

  const handleCacheMessage = (message: message) => {
    setMessages((prevState) => {
      return [...prevState, message];
    });
  };

  const handleMarkAllAsRead = (room: string) => {
    let messagesToUpdate = messages;
    messagesToUpdate.forEach((message) => {
      if (message.unread && message.room === room) message.unread = false;
    });
    setMessages(messagesToUpdate);
  };

  const contextValue = {
    messages: messages,
    cacheMessage: handleCacheMessage,
    markAllAsRead: handleMarkAllAsRead,
  };

  return (
    <MessagesContext.Provider value={contextValue}>
      {children}
    </MessagesContext.Provider>
  );
};

interface notificationProps {
  title: string;
  body?: string;
}
