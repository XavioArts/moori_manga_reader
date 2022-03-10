import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../actions";

const Protected = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(()=>{
        if (auth.image !== null) {
            setImageUrl(auth.image);
        }
    }, [])

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const handleChange = (info) => {
        console.log(info);
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            setLoading(false);
            console.log(info.file);
        // Get this url from response in real world.
        // getBase64(info.file.originFileObj, imageUrl =>
        //     this.setState({
        //     imageUrl,
        //     loading: false,
        //     }),
        // );
        }
    };

    const handleUpload = async (file) => {
        console.log(file);
        console.log(file.file);
        let data = new FormData();
        data.append("file", file.file)
        try {
            let res = await axios.post("/api/users/image", data);
            dispatch(setUser(res.data));
            setLoading(false);
            setImageUrl(res.data.image);
        } catch (err) {
            alert("error occured")
        }
    };

    return (
        <div>
            <h1>Profile Settings</h1>
            <p>update upser here</p>
            <button onClick={()=>auth.handleLogout(navigate)} >Log Out</button>
            <h3>Upload test</h3>
            <h4>Edit Profile Avatar</h4>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                customRequest={handleUpload}
                withCredentials
                onChange={handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        </div>
    );
};

export default Protected;