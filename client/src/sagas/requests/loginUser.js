import axios from "axios";

const url = "/api/auth/sign_in";

const loginUser = async (user) => {
        let res = await axios.post(url, user);
        return res.data.data;
}

export default loginUser;

// const handleLogin = async (user, navigate) => {
    //     // axios call to log in user
    //     try {
    //         let res = await axios.post("/api/auth/sign_in", user);
    //         console.log(res.data);
    //         setUser(res.data.data);
    //         navigate("/");
    //     } catch (err) {
    //         console.log(err.response);
    //         alert("An error occurred logging in");
    //     }
    // };