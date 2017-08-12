import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
    render() {
        return (
            <div className="Header-container">
                <h1>React Roguelike Game</h1>
                <p>
                    Made by <a href="">Alexander Kallaway</a>
                </p>
            </div>
        );
    }
}

export default Header;
