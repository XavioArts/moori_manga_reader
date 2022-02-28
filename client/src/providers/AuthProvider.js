import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loginUser, toggleCheckAuth } from "../actions";

export const AuthContext = React.createContext();
// only need the AuthContext as we will use the useContext hook
// i.e. const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {

    // The user state will keep track of the user that is logged in
    // We initialize the state as null, which is a user that is not logged in
    
    
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const checkingAuthStatus = useSelector(state => state.user.checkingAuthStatus)
    // const [user, setUser] = useState(reduxUser);
    //// This user will be put into the redux store instead ^^^

    // const [checkingAuthStatus, setCheckingAuthStatus] = useState(reduxChecking);

    useEffect(()=>{
        getUserToRedux();
    },[]);

    const getUserToRedux = async () => {
        if (user || !localStorage.getItem("access-token")) {
            console.log("authenticated");
            // setCheckingAuthStatus(false);
            dispatch(toggleCheckAuth());
            return;
        }
        dispatch(getUser())
        // try {
        //     console.log("validating token");
        //     const res = await axios.get("/api/auth/validate_token");
        //     setUser(res.data.data);
        // } catch (err) {
        //     console.log(err.respose);
        //     console.log("unable to validate token");
        // } finally {
        //     setCheckingAuthStatus(false);
        //     return;
        // }
    };

    ///// |||||| THESE WILL NEED TO CONVERT TO REDUX ||||||
    ///// vvvvvv                                     vvvvvv

    // const handleRegister = async (user, navigate) => {
    //     // axios call to register new user
    //     try {
    //         let res = await axios.post("/api/auth", user);
    //         setUser(res.data.data);
    //         navigate("/");
    //     } catch (err) {
    //         console.log(err.response);
    //         alert("An error occurred registering user");
    //     }
    // };

    const handleLogin = async (user, navigate) => {
        // axios call to log in user
        dispatch(loginUser(user));
        navigate("/");
        // try {
        //     let res = await axios.post("/api/auth/sign_in", user);
        //     console.log(res.data);
        //     setUser(res.data.data);
        //     navigate("/");
        // } catch (err) {
        //     console.log(err.response);
        //     alert("An error occurred logging in");
        // }
    };

    const handleLogout = async (navigate) => {
        // axios call to log out
        try {
            let res = await axios.delete("/api/auth/sign_out");
            console.log(res);
            // setUser(null);
            navigate("/");
        } catch (err) {
            console.log(err.response);
            alert("an error occurred logging out");
        }
    };

    // const handleUpdate = async (user, navigate) => {
    //     try {
    //         let res = await axios.put("/api/auth", user);
    //         console.log(res.data);
    //         setUser(res.data.data);
    //         navigate("/");
    //     }   catch (err) {
    //         console.log(err.response);
    //         alert("an error occurred updating user")
    //     }
    // }

    // const handleDelete = async (navigate) => {
    //     try {
    //         let res = await axios.delete("/api/auth")
    //         console.log(res);
    //         setUser(null);
    //         navigate("/public");
    //     } catch (err) {
    //         console.log(err.response);
    //         alert("there was an error deleting your account");
    //     }
    // }

    return (
        <AuthContext.Provider value={{
            ...user,
            authenticated: user !== null,
            // setUser,
            // handleRegister,
            handleLogin,
            handleLogout,
            // handleDelete,
            // handleUpdate,
            checkingAuthStatus,
        }} >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;