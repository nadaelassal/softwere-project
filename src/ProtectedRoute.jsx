import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
    const isAuthenticated = false;

    if (!isAuthenticated){
        console.log('You have to log in');
        return<Navigate to="/" />
    }
    return < Outlet/>;
};
export default ProtectedRoute;