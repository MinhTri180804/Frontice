import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import AppRouter from "./components/wrapper/Router";
import AppLayout from "./components/layout/AppLayout";
import QueryProvider from "./components/wrapper/QueryProvider";

const App: React.FC = () => {
  return (
    <QueryProvider>
      <AppLayout>
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
    </QueryProvider>
  );
};

export default App;
