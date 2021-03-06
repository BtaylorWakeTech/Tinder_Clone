import React from "react";
import "./Header.css"
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
    return (
    <div className="header">
        <h2>I am header</h2>
        <IconButton>
        <PersonIcon fontSize="large" className="header__icon"></PersonIcon>
        </IconButton>
        <img
        className="header_logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt=""
        ></img>
        <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
    </div>
    );
}

export default Header;