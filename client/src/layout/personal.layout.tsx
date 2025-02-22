// PersonalLayout.tsx
import { Outlet } from "react-router-dom";
import { AuthProvider } from "@/context/auth-provider";
import Header from "@/components/header";
import { ThemeProvider } from "@/context/theme-provider";

const PersonalLayout = () => {
    return (
        <ThemeProvider>
            <AuthProvider>
                {/* You can still include the Header if desired */}
                {/* <Header />
            <main className="px-3 lg:px-20 py-3">
                <Outlet />
            </main> */}
                <div className="w-full">
                    <>
                        <Header />
                        <div className="px-3 lg:px-20 py-3">
                            <Outlet />
                        </div>
                    </>
                </div>
            </AuthProvider>
        </ThemeProvider>
    );
};

export default PersonalLayout;
// give custom skeleton to this
// do same as nav-links
// go to dashboard button
