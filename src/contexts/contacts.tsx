import { createContext, useState } from "react";
import { contact, ProviderProps, contactContext } from "src/ts";

export const ContactContext = createContext<contactContext | undefined>(
  undefined
);

export const ContactsProvider = ({ children }: ProviderProps) => {
  const [contactsList, setContactsList] = useState<contact[]>([]);

  const handleAddContact = (contact: contact) => {
    if (contactsList.length > 0) setContactsList([...contactsList, contact]);
    else setContactsList([contact]);
  };

  const contextValue = {
    contactsList: contactsList,
    addContact: handleAddContact,
  };

  return (
    <ContactContext.Provider value={contextValue}>
      {children}
    </ContactContext.Provider>
  );
};
