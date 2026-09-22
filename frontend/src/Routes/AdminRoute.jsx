import { useContext } from "react";
import useAdmin from "../Hook/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({ children }) => {
    const [user, loading] = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();
    if (loading || isAdminLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="w-20 h-20 text-warning animate-spin text-4xl font-bold">Loading...</span>
            </div>

        );
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/' state={{ from: location.pathname }} replace />;
};

export default AdminRoute;