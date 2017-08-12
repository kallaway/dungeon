import React, { Component } from "react";
import "./Map.scss";
import Square from "../Square/Square.js";
import Hero from "../Hero/Hero.js";

// should get pixel map?

class Map extends Component {
    render() {
        return (
            <div className="Map-container">
                <Square />
                <Square />
                <Square />

                <Hero />
            </div>
        );
    }
}

export default Map;
