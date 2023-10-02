import { createContext, useContext, useEffect, useState } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    async function onAuth() {
      const unsubscribe = await onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
      });
      return unsubscribe;
    }
    onAuth();
  }, []);

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}