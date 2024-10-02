import React from "react";

interface AppLayoutProps {
    children: React.ReactNode;
    hideHeaderFooter?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, hideHeaderFooter }) => {
    return (
        <div>
            {!hideHeaderFooter && (
                <header>
                    <h1>Header</h1>
                </header>
            )}
            <main>{children}</main>
            {!hideHeaderFooter && (
                <footer>
                    <p>Footer</p>
                </footer>
            )}
        </div>
    );
};

export default AppLayout;
