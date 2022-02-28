import axios from "axios";

const url = "/api/auth/sign_out";

const logoutUser = async () => {
        let res = await axios.delete(url);
        return res.data;
}

export default logoutUser;

 //     let res = await axios.delete("/api/auth/sign_out");