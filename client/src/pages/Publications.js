import { Button } from "antd";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ComicContainer } from "../components/Styles";

const Publications = (props) => {

    const { publications } = props;
    const navigate = useNavigate();

    const renderPublications = () => {
        if (publications.length === 0) {
            return <p>No publications, let's make your first comic!</p>
        } else {
            return publications.map((p)=> {
                return (
                    <ComicContainer key={p.id} >
                        <h2>{p.title}</h2>
                        <h4>{p.author}</h4>
                        <p>View/Select Button</p>
                        <p>Edit Button</p>
                        <p>Delete Button</p>
                        <p>This is where statistical data will go</p>
                    </ComicContainer>
                )
            })
        }
    }

    return (
        <div>
            <h1>Publications page</h1>
            <p>
                This will have all the creation and editing abilities:
                -The comics the user has published
                -Make a new comic
                -Edit published comic
                -create a new chapter, edit a chapter
                -edit store for each comic(crud on cards and badges)
            </p>
            <hr/>
            <div>
                <Button type="primary" onClick={()=>navigate("/publications/new")} >Create a new comic!</Button>
            </div>
            {renderPublications()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {publications: state.comics.publications}
}

export default connect(mapStateToProps)(Publications);