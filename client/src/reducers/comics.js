// will have all three states for all comics, publication comics, and favorite comics
const initialState = {
    all_comics: null,
    publications: null,
    library: null,
    loading: false,
    error: null,
}

const comics = (state = initialState, action) => {
    switch(action.type) {
        case "GET_ALL_COMICS_REQUESTED":
            return {...state, loading: true}
        case "GET_ALL_COMICS_SUCCESS":
            return {...state, loading: false, all_comics: action.comics, error: null}
        case "GET_ALL_COMICS_FAILED":
            return {...state, loading: false, error: action.message, checkingAuthStatus: false}
        case "GET_USER_COMICS_REQUESTED":
            return {...state, loading: true}
        case "GET_USER_COMICS_SUCCESS":
            return {...state, loading: false, publications: action.publications, library: action.library, error: null}
        case "GET_USER_COMICS_FAILED":
            return {...state, loading: false, error: action.message, checkingAuthStatus: false}
        case "CLEAR_USER_COMICS":
            return {...state, publications: null, library: null}
        // will need update and delete
        default:
            return state;
    }
};

export default comics;