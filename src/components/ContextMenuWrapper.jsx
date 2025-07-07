// import { useRef, useState, useEffect } from "react";
// import { useContextMenu } from "../context/ContextMenuContext";

// // positionMode: "cursor" | "above"
// const ContextMenuWrapper = ({
//   id,
//   items,
//   children,
//   positionMode = "cursor",
// }) => {
//   const wrapperRef = useRef();
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const { activeId, openMenu, closeMenu } = useContextMenu();
//   const isVisible = activeId === id;

//   useEffect(() => {
//     const handleClickOutside = () => closeMenu();
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   const handleContextMenu = (e) => {
//     e.preventDefault();

//     if (positionMode === "cursor") {
//       setPosition({ x: e.pageX, y: e.pageY });
//     } else if (positionMode === "above" && wrapperRef.current) {
//       const rect = wrapperRef.current.getBoundingClientRect();
//       const scrollY = window.scrollY;
//       const scrollX = window.scrollX;
//       setPosition({
//         x: scrollX + rect.left,
//         y: scrollY + rect.top - 120, // 10px above the element
//       });
//     }

//     openMenu(id);
//   };

//   const handleMenuClick = (e) => e.stopPropagation();

//   const handleItemClick = (action) => {
//     closeMenu();
//     action();
//   };

//   return (
//     <div ref={wrapperRef} onContextMenu={handleContextMenu}>
//       {children}
//       {isVisible && (
//         <div
//           onClick={handleMenuClick}
//           style={{
//             position: "absolute",
//             top: `${position.y}px`,
//             left: `${position.x}px`,
//           }}
//           className="z-50 bg-white border border-gray-300 shadow-md flex flex-col w-50"
//         >
//           {items.map((item, index) => (
//             <button
//               key={index}
//               className="text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//               onClick={() => handleItemClick(item.action)}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContextMenuWrapper;

import { useRef, useState, useEffect } from "react";
import { useContextMenu } from "../context/ContextMenuContext";

/**
 * ContextMenuWrapper
 * @param {string} id - Unique identifier for each wrapper
 * @param {Array} items - Array of { label, action } for menu
 * @param {string} positionMode - "cursor" | "above" | "smart"
 * @returns JSX.Element
 */
const ContextMenuWrapper = ({
  id,
  items,
  children,
  positionMode = "cursor", // default to cursor
}) => {
  const wrapperRef = useRef();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const { activeId, openMenu, closeMenu } = useContextMenu();
  const isVisible = activeId === id;

  // Handle outside click to close menu
  useEffect(() => {
    const handleClickOutside = () => closeMenu();
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Smart positioning logic
  const getSmartPosition = (menuHeight = 120, menuWidth = 200) => {
    const rect = wrapperRef.current.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Try above
    if (rect.top >= menuHeight) {
      return {
        x: scrollX + rect.left,
        y: scrollY + rect.top - menuHeight,
      };
    }

    // Try below
    if (windowHeight - rect.bottom >= menuHeight) {
      return {
        x: scrollX + rect.left,
        y: scrollY + rect.bottom,
      };
    }

    // Try right
    if (windowWidth - rect.right >= menuWidth) {
      return {
        x: scrollX + rect.right,
        y: scrollY + rect.top,
      };
    }

    // Try left
    if (rect.left >= menuWidth) {
      return {
        x: scrollX + rect.left - menuWidth,
        y: scrollY + rect.top,
      };
    }

    // Fallback: below
    return {
      x: scrollX + rect.left,
      y: scrollY + rect.bottom,
    };
  };

  // Handle right-click (context menu)
  const handleContextMenu = (e) => {
    e.preventDefault();

    if (positionMode === "cursor") {
      setPosition({ x: e.pageX, y: e.pageY });
    } else if (positionMode === "above" && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setPosition({
        x: window.scrollX + rect.left,
        y: window.scrollY + rect.top - 120,
      });
    } else if (positionMode === "smart" && wrapperRef.current) {
      const pos = getSmartPosition();
      setPosition(pos);
    }

    openMenu(id);
  };

  const handleMenuClick = (e) => e.stopPropagation();

  const handleItemClick = (action) => {
    closeMenu();
    action();
  };

  return (
    <div ref={wrapperRef} onContextMenu={handleContextMenu}>
      {children}
      {isVisible && (
        <div
          onClick={handleMenuClick}
          style={{
            position: "absolute",
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}
          className="z-50 bg-neutral-600 border border-neutral-400 shadow-md flex flex-col rounded overflow-hidden w-48"
        >
          {items.map((item, index) => (
            <button
              key={index}
              className="text-left px-4 py-2 text-sm text-neutral-100 hover:bg-neutral-700"
              onClick={() => handleItemClick(item.action)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContextMenuWrapper;
