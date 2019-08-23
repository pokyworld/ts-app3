import React, { Fragment, Suspense, lazy, useContext } from 'react';
import { Store } from "../Store";
import { IEpisodeProps } from "../interfaces"
import { toggleFavoriteAction } from '../actions/index';

import Loading from "../components/Loading";
import Header from "../components/Header";

const EpisodesList = lazy(() => import("../components/EpisodesList"));

export const HomePage = () => {
    const [state, dispatch] = useContext(Store);
    const { episodes, favorites } = state;

    const props: IEpisodeProps = {
        store: { state, dispatch },
        episodes: episodes,
        favorites: favorites,
        toggleFavoriteAction
    };

    return (
        <Fragment>
            <Header {...props}/>
            <section className="episode-layout">
                <Suspense fallback={<Loading />}>
                    <EpisodesList {...props} />
                </Suspense>
            </section>
        </Fragment>
    )
};

export default HomePage;
