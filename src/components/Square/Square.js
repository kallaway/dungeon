import React, { Component } from "react";
import "./Square.scss";
import Hero from "../Hero/Hero.js";
import Creature from "../Creature/Creature.js";

// visibility: on and off
// can contain - Enemy Item Hero Health

class Square extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="Square-container" />;
    }
}

export default Square;
