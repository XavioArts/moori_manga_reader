import axios from "axios";

const url = "/api/comics";
const url2 = "/api/favorites";

const getUserComics = async () => {
        let res = await axios.get(url);
        let res2 = await axios.get(url2);
        return {library: res.data, publications: res2.data};
}

export default getUserComics;