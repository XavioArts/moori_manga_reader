import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const RequireAuth = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);
    let timer = null;

    useEffect(()=>{
        return () => {
            clearTimeout(timer);
        }
    }, [])

    const timeRedirect = () => {
        timer = setTimeout(()=>setRedirect(true), 4500);
    }

    if (!auth.authenticated) {
        return (
            <div>
                <h3>Loading...</h3>
                {timeRedirect()}
                {redirect && <Navigate to="/login" />}
            </div>
        )
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default RequireAuth;