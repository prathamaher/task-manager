import { createContext, useContext, useState, useCallback } from "react";

const ContextMenuContext = createContext();

export const ContextMenuProvider = ({ children }) => {
  const [activeId, setActiveId] = useState(null);

  const openMenu = useCallback((id) => {
    setActiveId(id);
  }, []);

  const closeMenu = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <ContextMenuContext.Provider value={{ activeId, openMenu, closeMenu }}>
      {children}
    </ContextMenuContext.Provider>
  );
};

export const useContextMenu = () => {
  const context = useContext(ContextMenuContext);
  if (!context) {
    throw new Error("useContextMenu must be used within a ContextMenuProvider");
  }
  return context;
};
