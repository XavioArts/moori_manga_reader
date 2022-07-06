import axios from "axios";
//let comicRes = await axios.post("/api/comics", newComic);
const url = "/api/comics";

const newComic = async (comic) => {
        let res = await axios.post(url, comic);
        return res.data;
}

export default newComic;