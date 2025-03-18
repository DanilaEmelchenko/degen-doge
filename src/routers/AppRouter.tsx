import { useEffect } from "react";
import { backButton, useSignal } from "@telegram-apps/sdk-react";
import { HashRouter, Routes, Route } from "react-router";
import { AppLayout } from "../layout";
import { MainPage } from "../pages";

export const AppRouter = () => {
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
    <HashRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
