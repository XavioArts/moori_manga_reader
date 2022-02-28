import axios from "axios";

const url = "/api/auth";

const registerUser = async (user) => {
        let res = await axios.post(url, user);
        return res.data.data;
}

export default registerUser;