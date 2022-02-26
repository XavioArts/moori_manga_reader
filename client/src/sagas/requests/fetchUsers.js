import axios from "axios";

const url = "/api/users";

const fetchGetUsers = async () => {
        let res = await axios.get(url);
        return res.data;
}

export default fetchGetUsers;