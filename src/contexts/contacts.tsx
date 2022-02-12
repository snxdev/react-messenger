import { createContext, ReactNode, useState } from "react";

export const ContactContext = createContext<contactContext.context | undefined>(
  undefined
);

export const ContactsProvider = ({ children }: contactContext.contactProps) => {
  const [contactsList, setContactsList] = useState<contactContext.contact[]>(
    []
  );

  const handleAddContact = (contact: { name: string; uuid: string }) => {
    if (contactsList.length > 0) setContactsList([...contactsList, contact]);
    else setContactsList([contact]);
  };

  const contextValue: contactContext.context = {
    contactsList: contactsList,
    addContact: handleAddContact,
  };

  return (
    <ContactContext.Provider value={contextValue}>
      {children}
    </ContactContext.Provider>
  );
};

namespace contactContext {
  export type contact = { name: string; uuid: string };
  export type contactProps = { children: ReactNode };
  export interface context {
    contactsList: contact[];
    addContact: (contact: contact) => void;
  }
}
