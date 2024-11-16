import { createContext, useContext, useState } from 'react';

const ContactContext = createContext(null);

export const useContacts = () => useContext(ContactContext);

export const ContextProvider = ({ children }) => { // Accept `children` as a prop
    const [contacts, setContacts] = useState([]);
    const[selectedContact, setSelectedContact] = useState(null);

    
    return (
        <ContactContext.Provider value={{ contacts, setContacts, selectedContact, setSelectedContact }}>
            {children}
        </ContactContext.Provider>
    );
};
