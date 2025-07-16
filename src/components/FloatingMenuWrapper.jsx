import { useEffect, useRef, useState } from "react";
import { useFloatingMenu } from "../context/FloatingMenuContext";

const FloatingMenuWrapper = ({ children, menuItems = [] }) => {
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [transformX, setTransformX] = useState("translateX(-50%)");
  const triggerRef = useRef();
  const menuRef = useRef();
  const idRef = useRef(crypto.randomUUID());

  const { activeId, openMenu, closeMenu } = useFloatingMenu();
  const menuVisible = activeId === idRef.current;

  const positionMenu = () => {
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const menuEl = menuRef.current;
    if (!menuEl) return;

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const viewportWidth = window.innerWidth;
    const menuWidth = menuEl.offsetWidth;
    const buffer = 8;

    // Default center
    let top = scrollY + triggerRect.top - buffer;
    let left = scrollX + triggerRect.left + triggerRect.width / 2;
    let transformX = "translateX(-50%)";

    const menuLeft = left - menuWidth / 2;
    const menuRight = left + menuWidth / 2;

    if (menuLeft < buffer) {
      left = buffer + menuWidth / 2;
      transformX = "translateX(-50%)";
    } else if (menuRight > viewportWidth - buffer) {
      left = viewportWidth - buffer - menuWidth / 2;
      transformX = "translateX(-50%)";
    }

    setMenuPosition({ top, left });
    setTransformX(transformX);
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    if (menuVisible) {
      closeMenu();
    } else {
      openMenu(idRef.current);
    }
  };

  useEffect(() => {
    if (menuVisible) {
      requestAnimationFrame(() => {
        positionMenu();
      });
    }
  }, [menuVisible]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !triggerRef.current?.contains(e.target) &&
        !menuRef.current?.contains(e.target)
      ) {
        closeMenu();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [closeMenu]);

  return (
    <>
      <div ref={triggerRef} onClick={toggleMenu} className="inline-block">
        {children}
      </div>

      {menuVisible && (
        <div
          ref={menuRef}
          //   className="fixed z-50 bg-white text-black rounded shadow-lg text-sm py-2 px-3 w-40"
          className="fixed z-50 bg-neutral-600 border border-neutral-400 shadow-md text-sm flex flex-col rounded overflow-hidden w-40"
          style={{
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
            transform: `${transformX} translateY(-100%)`,
          }}
        >
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              //   className="py-1 px-2 hover:bg-gray-200 cursor-pointer rounded-sm"
              className="text-left px-3.5 py-1.5 text-sm text-neutral-100 hover:bg-neutral-700 cursor-default"
              onClick={() => {
                closeMenu();
                item.action?.();
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FloatingMenuWrapper;
