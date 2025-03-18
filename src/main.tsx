import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { init, backButton } from "@telegram-apps/sdk-react";

// Инициализируем SDK
init();

// Монтируем кнопку "Назад" (если она нужна)
backButton.mount();

createRoot(document.getElementById("root")!).render(<App />);
