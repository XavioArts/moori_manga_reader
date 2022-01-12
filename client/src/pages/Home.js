import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [comics, setComics] = useState(null);
    const [favorites, setFavorites] = useState(null);

    // const logOut = (e) => {
    //     e.preventDefault()
    // }
    const getComics = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.get("/api/comics");
            console.log(res);
            setComics(res.data);
        } catch (err) {
            console.log(err.response)
            alert("there was an error getting comics")
        }
    }
    const getFavorites = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.get("/api/favorites");
            console.log(res);
            setFavorites(res.data);
        } catch (err) {
            console.log(err.response)
            alert("there was an error getting favorite comics")
        }
    }

    return (
        <div>
            <h1>Home</h1>
            {JSON.stringify(auth)}
            <button onClick={()=>navigate("/login")} >Log In</button>
            <button onClick={()=>auth.handleLogout(navigate)} >Log Out</button>
            <button onClick={()=>navigate("/test")}>Comics Test</button>
            <button onClick={()=>navigate("/demo")}>Image demo</button>
            <br/>
            <button onClick={getComics} >Get user comics</button>
            {comics && 
                <div>
                    <hr/>
                    <p>{JSON.stringify(comics)}</p>
                    <hr/>
                </div>}
            <br/>
            <button onClick={getFavorites} >Get user favorites</button>
            {favorites && 
                <div>
                    <hr/>
                    <p>{JSON.stringify(favorites)}</p>
                    <hr/>
                </div>}
        </div>
    );
};

export default Home;