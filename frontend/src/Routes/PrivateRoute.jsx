import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location.pathname);


    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="w-20 h-20 text-warning animate-spin text-4xl font-bold">Loading...</span>
            </div>

        );
    }


    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location}} replace />;
};

export default PrivateRoute;