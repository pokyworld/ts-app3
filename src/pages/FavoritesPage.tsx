import React, { Fragment, lazy, Suspense, useContext } from 'react';
import { Store } from '../Store'
import { IEpisodeProps } from '../interfaces'
import { toggleFavoriteAction } from '../actions'

import Loading from "../components/Loading";
import Header from "../components/Header";

const EpisodesList = lazy(() => import("../components/EpisodesList"));

export const FavoritesPage = (): JSX.Element => {
    const [state, dispatch ] = useContext(Store)
    const { favorites } = state;

    const props: IEpisodeProps = {
        store: { state, dispatch },
        episodes: favorites,
        favorites: favorites,
        toggleFavoriteAction
    }

    return (
        <Fragment>
            <Header {...props} />
            <Suspense fallback={<div>loading...</div>}>
                <div className='episode-layout'>
                    <EpisodesList {...props} />
                </div>
            </Suspense>
        </Fragment>
    )
};
export default FavoritesPage;