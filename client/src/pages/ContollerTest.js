import axios from "axios";
import React, { useEffect, useState } from "react";

const ControllerTest = () => {

    const [comics, setComics] = useState(null);
    const [chapters, setChapters] = useState(null);
    const [cards, setCards] = useState(null);
    const [badges, setBadges] = useState(null);
    const [comments, setComments] = useState(null);
    const [pages, setPages] = useState(null);
    const [viewing, setViewing] = useState(null);

    const getComics = async () => {
        try {
            let res = await axios.get("/api/comics_full");
            setComics(res.data);
        } catch (err) {
            console.log(err.response);
        }
    }

    useEffect(()=>{
        getComics();
    },[]);

    const renderComics = () => {
        return comics.map((c)=>{
            return (
                <div style={{width: "175px", height: "200px", padding: "10px", minHeight: "200px", minWidth: "175px"}} >
                    <hr/>
                    <h2>{c.title}</h2>
                    <p>Author: {c.author}</p>
                    {/* <p>Icon: {c.icon}</p>
                    <p>COver: {c.cover}</p>
                    <p>Summary: {c.summary}</p> */}
                    <button onClick={()=>getComicData(c.id, c.title)} >Select Comic</button>
                    <hr/>
                </div>
            )
        })
    };
    const renderChapters = () => {
        return chapters.map((c)=>{
            return (
                <div>
                    <hr/>
                    <h4>{c.title}</h4>
                    <button onClick={()=>getChapter(c.id)} >View Chapter</button>
                    <hr/>
                    {pages && comments && 
                        <div>
                            <p>{JSON.stringify(pages)}</p>
                            <p>{JSON.stringify(comments)}</p>
                        </div>}
                </div>
            )
        })
    };
    const renderBadges = () => {
        return badges.map((b)=>{
            return (
                <div>
                    <hr/>
                    <h4>{b.title}</h4>
                    <p>Price: {b.price}</p>
                    <hr/>
                </div>
            )
        })
    };
    const renderCards = () => {
        return cards.map((c)=>{
            return (
                <div>
                    <hr/>
                    <h4>{c.title}</h4>
                    <p>Price: {c.price}</p>
                    <hr/>
                </div>
            )
        })
    };

    const getComicData = async (id, name) => {
        setViewing({title: name, id: id});
        try {
            let chap_res = await axios.get(`/api/comics/${id}/chapters`);
            let card_res = await axios.get(`/api/comics/${id}/cards`);
            let badge_res = await axios.get(`/api/comics/${id}/badges`);
            setChapters(chap_res.data);
            setCards(card_res.data);
            setBadges(badge_res.data);
        } catch (err) {
            console.log(err.response);
        }
    }

    const getChapter = async (id) => {
        try {
            let res = await axios.get(`/api/comics/${viewing.id}/chapters/${id}`);
            console.log(res.data);
            setPages(res.data.pages);
            setComments(res.data.comments);
            // will need to change how I get comments, custom SQL call
        } catch (err) {
            console.log(err.response);
        }
    }

    return (
        <div>
            <h1>Comics list:</h1>
            <hr/>
            <div style={{display: "flex", alignItems: "center", flexWrap: "wrap"}} >
                {comics && renderComics()}
            </div>
            <hr/>
            <h1>View Comic: {viewing && viewing.title}</h1>
            <hr/>
            <h2>Chapters -</h2>
            {chapters && renderChapters()}
            <hr/>
            <h2>Cards -</h2>
            {cards && renderCards()}
            <hr/>
            <h2>Badges -</h2>
            {badges && renderBadges()}
            <hr/>
        </div>
    )
};

export default ControllerTest;