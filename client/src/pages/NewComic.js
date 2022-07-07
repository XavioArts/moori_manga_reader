import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { publishComic } from "../actions";

const NewComic = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newComic = {title: title, author: author};
        console.log(newComic);
        dispatch(publishComic(newComic));
        // try {
        //     // let comicRes = await axios.post("/api/comics", newComic);
        //     // setNewComic(comicRes.data)
        //     // let publication = {title: comicRes.data.title, comic_id: comicRes.data.id,};
        //     // let pubRes = await axios.post("/api/publications", publication);
        //     // setPublication(pubRes.data);
        // } catch (err) {
        //     console.log(err.response);
        //     alert("there was an error publishing comic")
        // }
    }

    return (
        <div>
            <h1>New Comic page</h1>
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
        </div>
    )
}

export default NewComic;