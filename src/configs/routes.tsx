import { RouteObject, Outlet } from "react-router-dom";
import { NotFoundPage, LoginPage, RegisterPage, HomePage } from "../pages";
import { paths } from "../constant";
import { AppLayout } from "../components/layout";
import React from "react";

const ProfilePage = React.lazy(() => import("../pages/Profile"));

const extendedRoutes: RouteObject[] = [
    {
        index: true,
        path: paths.home,
        element: <HomePage />,
    },
    {
        path: paths.profile,
        element: <ProfilePage />,
    },
];

const routes: RouteObject[] = [
    {
        path: paths.default,
        element: (
            <AppLayout>
                <Outlet />
            </AppLayout>
        ),
        children: [
            ...extendedRoutes,
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
    {
        path: paths.login,
        element: <LoginPage />,
    }, {
        path: paths.register,
        element: <RegisterPage />,
    },
];

export default routes;
