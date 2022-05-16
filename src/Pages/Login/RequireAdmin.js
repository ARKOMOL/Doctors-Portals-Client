import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Shared/Loading';

const RequiredAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin,adminLoading] = useAdmin(user)
    const location = useLocation();
    if (loading || adminLoading) {
        return <Loading/>
    }
    if(!user || !admin){
        return<Navigate to='/login' state={{ from: location }} ></Navigate>
    }
    return children;
};

export default RequiredAdmin;