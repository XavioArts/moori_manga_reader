import axios from "axios";
import React, { useState } from "react";

const ComicsTest = () => {

    const [comics, setComics] = useState(null);

    const getComics = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.get("/api/comics_full");
            console.log(res.data);
            setComics(res.data);
        } catch (err) {
            console.log(err.response)
            alert("there was an error getting comics")
        }
    }

    return (
        <div>
            <h1>Tests here</h1>
            <br/>
            <button onClick={getComics} >Get all comics</button>
            {comics && 
                <div>
                    <hr/>
                    <p>{JSON.stringify(comics)}</p>
                    <hr/>
                </div>}
        </div>
    )
}

export default ComicsTest;