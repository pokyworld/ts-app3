import React, { Fragment, useContext } from 'react';
import { Link } from "react-router-dom";

import { Store } from "./Store";
import AppRouter from "./Router";
import { fetchDataAction } from './actions/index';

export const App = (): JSX.Element => {
    const [state, dispatch] = useContext(Store);
    const { episodes, favorites } = state;

    React.useEffect(() => {
        episodes.length === 0 && fetchDataAction(dispatch);
    });
    
    return (
        <Fragment>
            <AppRouter />
        </Fragment>
    )
};

export default App;

