import { createContext, useState } from "react";
import { contact, ProviderProps, contactContext } from "src/ts";

export const ContactContext = createContext<contactContext | undefined>(
  undefined
);

export const ContactsProvider = ({ children }: ProviderProps) => {
  const [contactsList, setContactsList] = useState<contact[]>([]);

  const handleAddContact = (contact: contact) => {
    setContactsList((prevState) => {
      return [...prevState, contact];
    });
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
