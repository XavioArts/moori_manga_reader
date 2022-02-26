import axios from "axios";

const url = "/api/auth/validate_token";

const getUser = async () => {
        let res = await axios.get(url);
        return res.data.data;
}

export default getUser;