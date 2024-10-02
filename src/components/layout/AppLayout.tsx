import React from "react";

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const hideHeaderFooter = ["/login", "/register"].includes(window.location.pathname);

    return (
        <div>
            {!hideHeaderFooter &&
                <h2>Header</h2>
            }
            <main>{children}</main>
            {!hideHeaderFooter &&
                <h2>Footer</h2>
            }
        </div>
    );
};

export default AppLayout;
