// PersonalLayout.tsx
import { Outlet } from "react-router-dom";
import { AuthProvider } from "@/context/auth-provider";
import Header from "@/components/header";

const PersonalLayout = () => {
    return (
        <AuthProvider>
            {/* You can still include the Header if desired */}
            <Header />
            <main className="px-3 lg:px-20 py-3">
                <Outlet />
            </main>
        </AuthProvider>
    );
};

export default PersonalLayout;
// give custom skeleton to this
// do same as nav-links
// go to dashboard button
