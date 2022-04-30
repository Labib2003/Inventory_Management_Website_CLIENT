import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <div class="flex flex-col justify-center items-center mt-10">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mb-5"></div>
            <h3 className='text-3xl font-semibold'>Loading...</h3>
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;