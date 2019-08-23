/**
|--------------------------------------------------
| All the interfaces used
|--------------------------------------------------
*/

export type IDispatch = React.Dispatch<IAction>

export type IFavoriteAction = (
    state: IState,
    dispatch: IDispatch,
    episode: IEpisode
) => IAction

export interface IState {
    episodes: Array<IEpisode>,
    favorites: Array<IEpisode>
};

export interface IAction {
    type: string,
    payload: any
};

export interface IEpisode {
    airdate: string,
    airstamp: string,
    airtime: string,
    id: number,
    image: { medium: string, original: string },
    name: string,
    number: number,
    runtime: number,
    season: number,
    summary: string,
    url: string
};

export interface IEpisodeProps {
    episodes: Array<IEpisode>
    store: { state: IState; dispatch: IDispatch }
    toggleFavoriteAction: IFavoriteAction
    favorites: Array<IEpisode>
}

