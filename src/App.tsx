import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import AppRouter from "./components/wrapper/Router";
import AppLayout from "./components/layout/AppLayout";

const App: React.FC = () => {
  const hideHeaderFooter = window.location.pathname === "/login" || window.location.pathname === "/register";

  return (
    <AppLayout hideHeaderFooter={hideHeaderFooter}>
      <AppRouter />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AppLayout>
  );
};

export default App;
