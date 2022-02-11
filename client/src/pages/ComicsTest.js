import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const ComicsTest = () => {

    const auth = useContext(AuthContext);
    const [unfavComics, setUnfavComics] = useState(null);
    const [comics, setComics] = useState(null);
    const [testComic, setTestComic] = useState(null);
    const [newComic, setNewComic] = useState(null);
    const [publication, setPublication] = useState(null);
    const [publications, setPublications] = useState(null);
    const [confirmation, setConfirmation] = useState(null);
    const [upConfirmation, setUpConfirmation] = useState(null);
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
    const getUnfavComics = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.get("/api/unfavorited");
            console.log(res.data);
            setUnfavComics(res.data);
        } catch (err) {
            console.log(err.response)
            alert("there was an error getting unfavorited comics")
        }
    }
    const testShow = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.get("/api/comics/7");
            console.log(res.data);
            setTestComic(res.data);
        } catch (err) {
            console.log(err.response)
            alert("there was an error testing show method")
        }
    }

    /// DELETE was hard coded, since its been tested it will not work again
    // Tested successful

    const testDelete = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.delete("/api/comics/9");
            // let publicationRes = await axios.delete("/api/publications/6")
            console.log(res.data);
            setConfirmation("Deleted successfully");
        } catch (err) {
            console.log(err.response)
            alert("there was an error deleting comic and publication")
        }
    }
    const getPublications = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.get("/api/publications");
            console.log(res.data);
            setPublications(res.data);
        } catch (err) {
            console.log(err.response)
            alert("there was an error getting user publications")
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
    const handleUpdate = async (e) => {
        e.preventDefault();
        let updatedComic = {title: title, author: author};
        try {
            let res = await axios.put("/api/comics/8", updatedComic);
            console.log(res.data)
            setUpConfirmation("Updated sucessfully")
        } catch (err) {
            console.log(err.response);
            alert("there was an error updating comic")
        }
    }

    const renderUnfav = () => {
        return unfavComics.map((c) => {
            return (
                <div>
                    <p>Comic name: {c.title}</p>
                    <p>id: {c.id}</p>
                    <button onClick={()=>testFavorites(c.id)}>Add to favorites</button>
                </div>
            )
        })
    }

    const testFavorites = async (id) => {
        let fav = {comic_id: id}
        try {
            let res = await axios.post("/api/favorites", fav);
            console.log(res.data);
        } catch (err) {
            console.log(err.response)
            alert("there was an error making favorite")
        }
    }

    return (
        <div>
            <h1>Tests here</h1>
            <br/>
            <button onClick={getUnfavComics} >Get unfav comics</button>
            {unfavComics && 
                <div>
                    <hr/>
                    {renderUnfav()}
                    <hr/>
                </div>}
            <br/>
            <hr/>
            <button onClick={getComics} >Get all comics</button>
            {comics && 
                <div>
                    <hr/>
                    {JSON.stringify(comics)}
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
            <hr/>
            <br/>
            <button onClick={getPublications} >Get user publications</button>
            {publications && 
                <div>
                    <hr/>
                    <p>{JSON.stringify(publications)}</p>
                    <hr/>
                </div>}
            <hr/>
            <br/>
            <button onClick={testShow} >test show</button>
            {testComic && 
                <div>
                    <hr/>
                    <p>{JSON.stringify(testComic)}</p>
                    <hr/>
                </div>}
            <hr/>
            <br/>
            <button onClick={testDelete} >test delete</button>
            {confirmation && 
                <div>
                    <hr/>
                    <h1>{confirmation}</h1>
                    <hr/>
                </div>}
            <br/>
            <hr/>
            <h3>Update test</h3>
            <form onSubmit={handleUpdate} >
                <label>Title:</label>
                <input value={title} onChange={(e)=>setTitle(e.target.value)} />
                <br/>
                <label>Author:</label>
                <input value={author} onChange={(e)=>setAuthor(e.target.value)} />
                <br/>
                <button type="submit" >submit</button>
            </form>
            {upConfirmation && 
                <div>
                    <hr/>
                    <h1>{upConfirmation}</h1>
                    <hr/>
                </div>}
        </div>
    )
}

export default ComicsTest;