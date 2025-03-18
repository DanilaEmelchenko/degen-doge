import { isTMA } from "@telegram-apps/bridge"; // Импорт функции для проверки среды

// Проверка, работает ли приложение в Telegram
export const checkIfInsideTelegram = async () => {
  if (await isTMA("complete")) {
    console.log("It's Telegram Mini Apps");
  }
};
