const ScrollableDiv = ({ children, height = "300px" }) => {
  return (
    <div
      style={{ maxHeight: height }}
      className={`
        overflow-y-auto
        [&::-webkit-scrollbar]:w-1
        [&::-webkit-scrollbar-track]:bg-violet-100
        [&::-webkit-scrollbar-track]:rounded-4xl
        [&::-webkit-scrollbar-thumb]:bg-violet-400
        [&::-webkit-scrollbar-thumb]:rounded-4xl
      `}
    >
      {children}
    </div>
  );
};

export default ScrollableDiv;

// import React, { useRef, useEffect, useState } from "react";

// const ScrollableDiv = ({ children, height = "300px" }) => {
//   const containerRef = useRef(null);
//   const [showScrollbar, setShowScrollbar] = useState(false);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;

//     const handleScroll = () => {
//       setShowScrollbar(true);
//       clearTimeout(timeoutRef.current);
//       timeoutRef.current = setTimeout(() => setShowScrollbar(false), 1500);
//     };

//     container.addEventListener("scroll", handleScroll);
//     return () => {
//       container.removeEventListener("scroll", handleScroll);
//       clearTimeout(timeoutRef.current);
//     };
//   }, []);

//   return (
//     <>
//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }

//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #ede9fe; /* Tailwind violet-100 */
//           border-radius: 9999px;
//         }

//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background-color: #a78bfa; /* Tailwind violet-400 */
//           border-radius: 9999px;
//           transition: background-color 0.3s ease;
//         }

//         .custom-scrollbar.hide-thumb::-webkit-scrollbar-thumb {
//           background-color: transparent;
//         }

//         /* Firefox support */
//         .custom-scrollbar {
//           scrollbar-width: thin;
//           scrollbar-color: #a78bfa #ede9fe;
//         }

//         .custom-scrollbar.hide-thumb {
//           scrollbar-color: transparent transparent;
//         }
//       `}</style>

//       <div
//         ref={containerRef}
//         style={{ maxHeight: height }}
//         className={`custom-scrollbar overflow-y-auto p-4 rounded-md transition-all duration-300 ${
//           showScrollbar ? "" : "hide-thumb"
//         }`}
//       >
//         {children}
//       </div>
//     </>
//   );
// };

// export default ScrollableDiv;
