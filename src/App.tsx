import React from "react";
import AppRouter from "./components/wrapper/Router";
import AppLayout from "./components/layout/AppLayout";

const App: React.FC = () => {
  const hideHeaderFooter = window.location.pathname === "/login" || window.location.pathname === "/register";

  return (
    <AppLayout hideHeaderFooter={hideHeaderFooter}>
      <AppRouter />
    </AppLayout>
  );
};

export default App;
