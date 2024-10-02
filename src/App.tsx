import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import {
  QueryProvider,
  Router,
} from "./components/wrapper"
import { paths } from "./constant";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <QueryProvider>
        <Router defaultRoute={paths.home} />
      </QueryProvider>

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
    </div>
  );
};

export default App;
