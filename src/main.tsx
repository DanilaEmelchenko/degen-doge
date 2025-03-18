import { createRoot } from "react-dom/client";
import { init, backButton } from "@telegram-apps/sdk-react";
import { AppRouter } from "./routers";
import { checkIfInsideTelegram, mockTelegramEnvSetup } from "./helpers";

mockTelegramEnvSetup();

checkIfInsideTelegram(); // Выполнить проверку при старте приложения

// Инициализируем SDK
init();

// Монтируем кнопку "Назад" (если она нужна)
backButton.mount();

createRoot(document.getElementById("root")!).render(<AppRouter />);
