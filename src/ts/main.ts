import { ReactNode } from "react";

export type contact = { name: string; uuid: string; online: boolean };
export type ProviderProps = { children: ReactNode };

export interface contactContext {
  contactsList: contact[];
  addContact: (contact: contact) => void;
}

export interface chatContext {
  contact: contact;
  setChat: (contact: contact) => void;
}
