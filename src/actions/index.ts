import { IEpisode, IAction, IState, IDispatch } from "../interfaces";

export const fetchDataAction = async (dispatch: IDispatch) => {
    try {
        const url = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
        const data = await fetch(url);
        const dataJSON = await data.json();
        console.log(dataJSON);
        return dispatch({ type: "FETCH_DATA", payload: dataJSON._embedded.episodes });
    } catch (err) {
        console.log(err);
    }
};

export const toggleFavoriteAction = (state: IState, dispatch: IDispatch | any, episode: IEpisode | any): IAction => {
    const favorite = state.favorites.includes(episode);
    if (favorite) {
        return dispatch({
            type: "REMOVE_FAVORITE",
            payload: episode
        });
    } else {
        return dispatch({
            type: "ADD_FAVORITE",
            payload: episode
        });
    }
}