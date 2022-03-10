import axios from "axios";

const url = "/api/comics_full";

const getAllComics = async () => {
        let res = await axios.get(url);
        return res.data;
}

export default getAllComics;