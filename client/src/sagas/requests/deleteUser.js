import axios from "axios";

const url = "/api/auth";

const deleteUser = async () => {
        let res = await axios.delete(url);
        return res.data.data;
}

export default deleteUser;