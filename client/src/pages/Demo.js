import React from "react";
import FilepondDemo from "../components/FilepondDemo";
import FpDemo2 from "../components/FpDemo2";

const Demo = () => {

    return (
        <div>
            <h1>Demo/Test Page</h1>
            <hr/>
            <h4>Filepond Demo 1</h4>
            <p>This is how the reference sample has it</p>
            <FilepondDemo/>
            <hr/>
            <h4>Filepond Demo 2</h4>
            <p>as a functional component and more customizable/ similar to what we've done before</p>
            <FpDemo2/>
        </div>
    )
}

export default Demo;