import React from "react";
import { paths } from "../../constant";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    children: React.ReactNode;
    isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Navigate to={paths.login} replace />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
