import axios from "axios";

const url = "/api/publications";

const newPublication = async (pub) => {
        let res = await axios.post(url, pub);
        return res.data;
}

export default newPublication;