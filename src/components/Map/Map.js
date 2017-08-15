import React, { Component } from "react";
import "./Map.scss";
import Square from "../Square/Square.js";
import Hero from "../Hero/Hero.js";
// import Creature from "../Creature/Creature";

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
        this.state = {
            squares: []
        };
    }

    generateMap() {
        let matrix = [];
        for (let j = 0; j < 50; j++) {
            let row = [];
            for (let i = 0; i < 40; i++) {
                row.push(<Square />);
            }
            console.log(row);
            matrix.push(row);
        }

        console.log(matrix);
        return matrix;
    }

    render() {
        return (
            <div className="Map-container">
                {this.generateMap().map(row => {
                    return row.map(cell => cell);
                })}
                <Square />
                <Square />
                <Square />

                <Hero />
            </div>
        );
    }
}

export default Map;
