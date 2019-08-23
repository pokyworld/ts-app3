import React from 'react';
import { NavLink } from "react-router-dom";

export const Header = (props: any) => {
    const { episodes, favorites } = props;
    return (
        <header className="header">
            <h2 style={{ flex: "1 0 auto" }}>Rick &amp; Morty</h2>

            <div style={{ display: "flex" }}>
                <NavLink
                    className="nav-link"
                    exact
                    activeStyle={{ fontWeight: "bold" }}
                    to='/'
                >Episodes</NavLink>
                <NavLink
                    className="nav-link"
                    activeStyle={{ fontWeight: "bold" }}
                    to='/favorites'
                >Favourite(s): {
                        favorites.length
                    }</NavLink>
            </div>
        </header>
    )
}
export default Header;
