import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <>
      <h1>Обертка</h1>
      <Outlet />
    </>
  );
};
