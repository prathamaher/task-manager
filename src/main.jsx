import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { ContextMenuProvider } from "./context/ContextMenuContext.jsx";
import { FloatingMenuProvider } from "./context/FloatingMenuContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ContextMenuProvider>
      <FloatingMenuProvider>
        <App />
      </FloatingMenuProvider>
    </ContextMenuProvider>
  </Provider>
);
