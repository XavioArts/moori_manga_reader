import axios from "axios";

const url = "/api/auth";

const updateUser = async (user) => {
        let res = await axios.put(url, user);
        return res.data.data;
}

export default updateUser;