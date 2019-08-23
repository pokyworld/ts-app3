import React from 'react';
import { IEpisode, IDispatch, IState, IFavoriteAction } from '../interfaces'

interface IProps {
    episodes: Array<IEpisode>
    toggleFavAction: IFavoriteAction
    favourites: Array<IEpisode>
    store: { state: IState; dispatch: IDispatch }
};

export const EpisodeList = (props: any): JSX.Element => {
    const { episodes, favorites, toggleFavoriteAction, store } = props;
    const { state, dispatch } = store;
    return episodes.map((episode: IEpisode) => {
        return (
            <section key={episode.id} className="episode-box">
                {episode.image &&
                    <a href={episode.url.replace("http", "https")} target="_blank">
                        <div className="episode-image">
                            <img src={episode.image.medium.replace("http", "https")} title={`Rick and Morty: ${episode.name}`} />
                            <div className="overlay">
                                <div className="text" dangerouslySetInnerHTML={{ __html: episode.summary }} />
                            </div>
                        </div>
                    </a>
                }
                {
                    !episode.image &&
                    <a href={episode.url.replace("http", "https")} target="_blank">
                        <div className="episode-image">
                            <img src="https://via.placeholder.com/250x140/C00C00/000000?text=No+Image" title={`Rick and Morty: ${episode.name}`} />
                            <div className="overlay">
                                <div className="text" dangerouslySetInnerHTML={{ __html: episode.summary }} />
                            </div>
                        </div>
                    </a>

                }
                <section className="episode-footer">
                    <div>{episode.name}</div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>Season: {episode.season}, Number: {episode.number}</div>
                        <i
                            className={`fa fa-2x ${favorites.includes((episode)) ? "fa-heart" : "fa-heart-o"}`}
                            style={{ marginTop: -10, marginBottom: 5, cursor: "pointer", color: "red" }}
                            onClick={() => toggleFavoriteAction(state, dispatch, episode)}
                            title="Favorite"
                        ></i>
                    </div>
                </section>

            </section>
        );
    });
}

export default EpisodeList;
