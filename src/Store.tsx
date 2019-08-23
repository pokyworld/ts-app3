import React from "react";
import { IState, IAction, IEpisode } from "./interfaces";

const initialState: IState = {
    episodes: [],
    favorites: []
};

export const Store: any = React.createContext<IState>(initialState);

const reducer = (state: IState, action: IAction): IState => {
    const { type, payload } = action;
    switch (type) {
        case "FETCH_DATA": return { ...state, episodes: payload };
        case "ADD_FAVORITE": return {
            ...state, favorites: [...state.favorites, payload]
        };
        case "REMOVE_FAVORITE": return {
            ...state, favorites: [...state.favorites.filter((e: IEpisode) => e.id !== payload.id)]
        };
        default: return state;
    }
};

export const StoreProvider = (props: any): JSX.Element => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return <Store.Provider value={[state, dispatch]}> {props.children}</Store.Provider >
};