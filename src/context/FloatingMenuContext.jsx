// context/FloatingMenuContext.jsx
import { createContext, useContext, useState, useCallback } from "react";

const FloatingMenuContext = createContext();

export const FloatingMenuProvider = ({ children }) => {
  const [activeId, setActiveId] = useState(null);

  const openMenu = useCallback((id) => {
    setActiveId(id);
  }, []);

  const closeMenu = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <FloatingMenuContext.Provider value={{ activeId, openMenu, closeMenu }}>
      {children}
    </FloatingMenuContext.Provider>
  );
};

export const useFloatingMenu = () => useContext(FloatingMenuContext);
