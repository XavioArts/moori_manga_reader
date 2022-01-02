import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const ComicsTest = () => {

    const auth = useContext(AuthContext);
    const [comics, setComics] = useState(null);
    const [newComic, setNewComic] = useState(null);
    const [publication, setPublication] = useState(null);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const getComics = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.get("/api/comics_full");
            console.log(res.data);
            setComics(res.data);
        } catch (err) {
            console.log(err.response)
            alert("there was an error getting comics")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newComic = {title: title, author: author};
        try {
            let comicRes = await axios.post("/api/comics", newComic);
            setNewComic(comicRes.data)
            let publication = {title: comicRes.data.title, comic_id: comicRes.data.id,};
            let pubRes = await axios.post("/api/publications", publication);
            setPublication(pubRes.data);
        } catch (err) {
            console.log(err.response);
            alert("there was an error publishing comic")
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
            <br/>
            <hr/>
            <h3>Create a comic</h3>
            <form onSubmit={handleSubmit} >
                <label>Title:</label>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} />
                <br/>
                <label>Author:</label>
                <input value={author} onChange={(e)=>setAuthor(e.target.value)} />
                <br/>
                <button type="submit" >submit</button>
            </form>
            {newComic && publication && 
                <div>
                    <hr/>
                    <h3>New Comic</h3>
                    <p>{JSON.stringify(newComic)}</p>
                    <h3>Publication Confirmation</h3>
                    <p>{JSON.stringify(publication)}</p>
                    <hr/>
                </div>}
        </div>
    )
}

export default ComicsTest;