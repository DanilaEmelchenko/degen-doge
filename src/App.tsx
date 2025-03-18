import { useEffect } from "react";
import { backButton, useSignal } from "@telegram-apps/sdk-react";

function App() {
  // Следим за состоянием кнопки "Назад"
  const isVisible = useSignal(backButton.isVisible);

  useEffect(() => {
    console.log("Кнопка назад:", isVisible ? "видима" : "невидима");
  }, [isVisible]);

  useEffect(() => {
    // Показываем кнопку "Назад" при загрузке
    backButton.show();
    return () => {
      backButton.hide(); // Скрываем при размонтировании
    };
  }, []);

  return (
    <div>
      <h1>Привет, Mini App!</h1>
    </div>
  );
}

export default App;
