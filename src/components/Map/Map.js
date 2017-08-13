import React, { Component } from "react";
import "./Map.scss";
import Square from "../Square/Square.js";
import Hero from "../Hero/Hero.js";

// should get pixel map?
// map should know what's going on on it and manage it

// visible rows

// state should know: current level map
// state should know: user stats
// based on level, game should decide which users are there

// on game init, user should be randomly placed

// Map could have a MapContainer

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

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
