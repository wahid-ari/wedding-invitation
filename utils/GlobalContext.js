'use client';

import { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(true);

  return <GlobalContext.Provider value={{ modalOpen, setModalOpen }}>{children}</GlobalContext.Provider>;
}

export function useShowModal() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useShowModal must be used within a GlobalProvider');
  }
  return context;
}
