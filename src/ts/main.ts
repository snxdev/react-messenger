import { ReactNode } from "react";

export type contact = {
  name: string;
  uuid: string;
  online: boolean;
  hasUnreadMessages: boolean;
};
export type ProviderProps = { children: ReactNode };

export interface contactContext {
  contactsList: contact[];
  addContact: (contact: contact) => void;
}

export interface chatRoomContext {
  contact: contact;
  setChatRoom: (contact: any) => void;
}

export type message = {
  room: string;
  owner: boolean;
  message: string;
  unread: boolean;
};

export interface messagesContext {
  messages: message[];
  cacheMessage: (message: message) => void;
  markAllAsRead: (room: string) => void;
}
