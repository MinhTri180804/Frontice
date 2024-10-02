import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { paths } from "../../constant";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import NotFound from "../../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

const AppRouter: React.FC = () => {
    const isAuthenticated = true;

    return (
        <Router>
            <Routes>
                <Route path={paths.home} element={<Home />} />
                <Route path={paths.login} element={<Login />} />
                <Route path={paths.register} element={<Register />} />

                {/* Route yêu cầu xác thực */}
                <Route
                    path="/protected"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <h2>Protected Page</h2>
                        </PrivateRoute>
                    }
                />

                <Route path={paths.default} element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
