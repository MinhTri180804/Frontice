import React from "react";
import { paths } from "../../constant";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    children: React.ReactNode;
}

const isAuthenticated: boolean = true

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    if (!isAuthenticated) {
        return <Navigate to={paths.login} />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
