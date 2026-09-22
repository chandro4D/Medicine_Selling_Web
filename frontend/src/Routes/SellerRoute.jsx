import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

import useSeller from "../Hook/useSeller";


const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [isSeller, isSellerLoading] = useSeller();
    if (loading || isSellerLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="w-20 h-20 text-warning animate-spin text-4xl font-bold">Loading...</span>
            </div>

        );
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to='/' state={{ from: location.pathname }} replace />;
};

export default SellerRoute;